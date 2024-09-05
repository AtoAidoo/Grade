import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'

const Checkbox = ({Label}:{Label: string}) => {
    const [Checked, setChecked] = useState(false)
    const textColor = useThemeColor({}, 'text');
    const tintColor = useThemeColor({}, 'tint');
  return (
    <View style={{flexDirection: 'row'}}>
    <TouchableOpacity
    style={[styles.checkboxBase, {borderColor: tintColor},Checked && {backgroundColor: tintColor}]}
    onPress={() => setChecked(!Checked)}>
    {Checked && <Ionicons name="checkmark-sharp" size={20} color="white" />}
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setChecked(!Checked)}>
  <Text style={{color: textColor, marginLeft: 10}}>{Label}</Text>
  </TouchableOpacity>
  </View>
  )
}

export default Checkbox

const styles = StyleSheet.create({
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        backgroundColor: 'transparent',
      },
      
})