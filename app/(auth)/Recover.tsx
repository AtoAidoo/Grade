import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormInput from '@/components/FormInput'
import Button from '@/components/Button'
import { router } from 'expo-router'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Feather, Ionicons } from '@expo/vector-icons'

const Recover = () => {
    const backgroundColor = useThemeColor({}, 'background')
  const textColor = useThemeColor({}, 'text')
  const tintColor = useThemeColor({}, 'tint')
  const [isMatch, setIsMatch] = useState(false)
  const [Form, setForm] = useState({
    password1: '',
    password2: '',
  })

  const handlesend = ()=> {
    if(Form.password1.length >= 8){

        if(Form.password1 !== Form.password2){
            setIsMatch(true)
            setTimeout(() => {
                setIsMatch(false)
            }, 3000);
        }
        else{
            router.replace('/Login')
        }
    }
    else{
        null
    }
  }

  return (
    <View style={styles.container}>
    <Text style={{color: textColor, fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
      Recover Password
      </Text>
    <Text style={{color: textColor, textAlign: 'center', fontSize: 16}}>
      Please enter your new password and confirm it. You will be redirected to the Login Screen 
    </Text>
    <FormInput title={'New Password'} value={Form.password1} handleChangeText={(e: any) => setForm({...Form, password1: e})} placeholder={'Enter your Password'} />
    <FormInput title={'Confirm Password'} value={Form.password2} handleChangeText={(e: any) => setForm({...Form, password2: e})} placeholder={'Confirm Password'} />
      <View style={{justifyContent: 'center', alignItems: "center"}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
            <Feather name='alert-triangle'size={24} color={'green'} />
        <Text style={{color: 'green'}}>Password must be at least 8 character</Text>
        </View>
        {isMatch? (<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
            <Ionicons name='alert-circle'size={24} color={'red'} />
        <Text style={{color: 'red'}}>Password do not match</Text>
        </View>): null}
      </View>
      
      <View style={{marginVertical: 20}}>
      <Button title={'Reset'} handlepress={handlesend} />
      </View>
  </View>
)
}

export default Recover

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
}
})