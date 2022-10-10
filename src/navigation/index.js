import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginVista from '../vistas/LoginVista';
import HomeVista from '../vistas/HomeVista';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LogIn' component={LoginVista} />
        <Stack.Screen name='Home' component={HomeVista} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation