import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormInput from '@/components/FormInput'
import { useThemeColor } from '@/hooks/useThemeColor'
import Button from '@/components/Button'
import { router } from 'expo-router'

const Forget = () => {
  const backgroundColor = useThemeColor({}, 'background')
  const textColor = useThemeColor({}, 'text')
  const tintColor = useThemeColor({}, 'tint')
  const [Form, setForm] = useState({
    email: '',
  })
  return (
    <View style={styles.container}>
      <Text style={{color: textColor, fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
        Forget Password
        </Text>
      <Text style={{color: textColor, textAlign: 'center', fontSize: 16}}>
        You can retrieve your password as long as you verify it is you. Enter your Email here
      </Text>
      <FormInput title={''} value={Form.email} handleChangeText={(e: any) => setForm({...Form, email: e})} placeholder={'Enter your Email Address'} />
        <View style={{marginVertical: 20}}>
        <Button title={'Continue'} handlepress={()=> router.replace('/Recover')} />
        </View>
    </View>
  )
}

export default Forget

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})