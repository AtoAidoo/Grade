import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'

const Button = ({title, handlepress}:{
  title: string,
  handlepress: any
}) => {
    const tintColor = useThemeColor({}, 'tint')
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: tintColor}]}
    onPress={handlepress}
    activeOpacity={0.4}
    >

        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>

    // style={[styles.container, {backgroundColor: tintColor}]}
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: '#fff',
        borderRadius: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 20,
    }
})