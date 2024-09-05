import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor';
import { FontAwesome6 } from '@expo/vector-icons';

const Logo = ({size}:{
  size: number,
}) => {
    const textColor = useThemeColor({}, "text");
    const tintColor = useThemeColor({}, 'tint')
  return (
    <View>
      <Text style={{fontSize: size, fontWeight: "600"}}>
      <FontAwesome6 name="book-open" size={size} color={tintColor} />
        <Text style={{color: textColor}}>Gra</Text>
        <Text style={{color: tintColor}}>de</Text>
      </Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    
})