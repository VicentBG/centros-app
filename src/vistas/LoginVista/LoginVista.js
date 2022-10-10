import React, {useState} from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/Logo.png'
import CustomInput from '../../componentes/CustomInput/CustomInput';
import CustomButton from '../../componentes/CustomButton';
import { useNavigation } from '@react-navigation/native';

const LoginVista = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onPressLogin = () => {
    navigation.navigate('Home');
  }

  const onPressForgotPassword = () => {
    console.warn('Forgot Password pressed');
  }
  
  const onPressLoginFacebook = () => {
    console.warn('Log In with Facebook pressed');
  }
  const onPressLoginGoogle = () => {
    console.warn('Log In with Google pressed');
  }
  const onPressLoginApple = () => {
    console.warn('Log In with Apple pressed');
  }

  const onPressSignup = () => {
    console.warn('Sign Up pressed');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
        source={Logo} 
        style={[styles.image, {height: height * 0.3}]} 
        resizeMode="contain" />

        <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue={setUsername} />
        <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry />

        <CustomButton 
        text='Log In' 
        onPress={onPressLogin} />

        <CustomButton 
        text='Forgot Password' 
        onPress={onPressForgotPassword} 
        type='TERTIARY' />

        <CustomButton 
        text='Log In with Facebook' 
        bgColor='#e7eaf4' 
        fgColor='#4765a9' 
        onPress={onPressLoginFacebook} />
        <CustomButton 
        text='Log In with Google' 
        bgColor='#fae9ea' 
        fgColor='#dd4d44' 
        onPress={onPressLoginGoogle} />
        <CustomButton 
        text='Log In with Apple' 
        bgColor='#e3e3e3' 
        fgColor='#363636' 
        onPress={onPressLoginApple} />

        <CustomButton 
        text="Don't have an account? Create one." 
        onPress={onPressSignup} 
        type='TERTIARY' />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
  },
  image: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 300,
  }
});

export default LoginVista