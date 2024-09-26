import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useThemeColor } from '@/hooks/useThemeColor'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import FormInput from '@/components/FormInput'
import Checkbox from '@/components/Checkbox'
import { Link, router } from 'expo-router'

const Signup = () => {
  const textColor = useThemeColor({}, 'text')
  const tintColor = useThemeColor({}, 'tint')
  const [Form, setForm] = useState({
    email: '',
    password: '',
    username: '',
  })
  return (
    <SafeAreaView style={styles.container}>
     <View style={{justifyContent: 'center', alignItems: 'center',}}> 
      <Logo size={20} />
      <Text style={[styles.Text, {color: textColor}]}>Register to Grade</Text>
      </View>
      <FormInput
      title= 'Username'
      value= {Form.username}
      handleChangeText={(e: any) => setForm({...Form, username: e})}
      placeholder='Enter Your Username'
      />
      <FormInput
      title= 'Email'
      value= {Form.email}
      handleChangeText={(e: any) => setForm({...Form, email: e})}
      placeholder='Enter Your Email'
      />
      
      <FormInput
        title='Password'
        value={Form.password}
        handleChangeText={(e: any) => setForm({ ...Form, password: e })} 
        placeholder='Enter Password'
        />
      <View style={{flexDirection: 'row', marginVertical: 20}}>
      <Checkbox
       Label={'I agree to all '} />
       <Link style={{color: tintColor}} href={''} >terms and conditions</Link>
       </View>

      <Button 
      title='Signup'
      handlepress={() => {router.replace('/Home')}} />

    <View style={styles.Register}>
    <Text style={{color: textColor}}>Already Have an account? </Text>
    <Link style={{color: tintColor}} href={'./Login'}>Login</Link>
    </View>

    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  Register:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  Text: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: '600',
  }, 
  select: {
    color: '#1a66ca'
  }
})