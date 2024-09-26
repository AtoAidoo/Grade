import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons'
import Checkbox from './Checkbox'

type iconPic = 'eye-outline' | 'eye-off-outline'
const FormInput = ({title, value, handleChangeText, placeholder}:{
    title: string,
    value: string,
    handleChangeText: any,
    placeholder: string,
}) => {
    const [showPassword, setshowPassword] = useState(false)
    const textColor = useThemeColor({}, 'text');
    const tintColor = useThemeColor({}, 'tint');
    const inputbackgroundColor = useThemeColor({}, 'inputbackground');
    const placeholderColor = useThemeColor({}, 'placeholder');
    var iconPics;

    if (showPassword== false) {
        iconPics = 'eye-outline' as iconPic
    }
    else {
        iconPics = 'eye-off-outline' as iconPic
    }


  return (
    <View>
      <Text style={{color: textColor, marginTop: 20}}>{title}</Text>
      <View style={[styles.panel, {backgroundColor: inputbackgroundColor, borderColor: inputbackgroundColor}]}>
        <TextInput
        style={[styles.input, {color: textColor}]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={handleChangeText}
        secureTextEntry= {title === 'Password' && !showPassword}
        />

        

    {title === 'Password' && value !== "" && (
        <TouchableOpacity  onPress={() => setshowPassword(!showPassword)}>
            <Ionicons name={iconPics} style={{paddingLeft: 10}} size={24} color={textColor} />
        </TouchableOpacity>
    )}
      </View>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
    panel: {
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
    }
})