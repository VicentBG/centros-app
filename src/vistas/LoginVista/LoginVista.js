import React, {useState} from 'react'
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/Logo.png'
import CustomInput from '../../componentes/CustomInput/CustomInput';
import CustomButton from '../../componentes/CustomButton';

const LoginVista = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onPressLogin = () => {
    console.warn('Log In pressed');
  }

  const onPressForgotPassword = () => {
    console.warn('Forgot Password pressed');
  }

  return (
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

    <CustomButton text='Log In' onPress={onPressLogin} />

    <CustomButton text='Forgot Password' onPress={onPressForgotPassword} type='TERTIARY' />

    <CustomButton 
    text='Log In with Facebook' 
    bgColor='#e7eaf4' 
    fgColor='#4765a9' 
    onPress={onPressLogin} />
    <CustomButton 
    text='Log In with Google' 
    bgColor='#fae9ea' 
    fgColor='#dd4d44' 
    onPress={onPressLogin} />
    <CustomButton 
    text='Log In with Apple' 
    bgColor='#e3e3e3' 
    fgColor='#363636' 
    onPress={onPressLogin} />
    </View>
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