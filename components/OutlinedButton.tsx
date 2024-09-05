import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const OutlinedButton = ({title, handlepress, icon, disabled}: {
    title: string,
    handlepress: any,
    icon: string,
    disabled: any,
}) => {
    const textColor = useThemeColor ({}, 'text')
    const tintColor = useThemeColor ({}, 'tint')

    const buttonStyle = [styles.container, {borderColor: tintColor}];
    if (disabled) {
      buttonStyle.push(styles.disabled, {borderColor: tintColor});
    }
  return (
    <TouchableOpacity style={buttonStyle} onPress={handlepress} disabled={disabled} >
        <Ionicons name= {icon} size={30} color={tintColor} />
      <Text style={{color: tintColor, marginLeft: 5}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default OutlinedButton

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        
    },
    disabled: {
      borderWidth: 2,
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 10,
      opacity: 0.5,
    },
})