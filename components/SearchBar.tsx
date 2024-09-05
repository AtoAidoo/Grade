import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons'


const SearchBar = ({placeholder}:{
    placeholder: string
}) => {
    const textColor = useThemeColor({}, 'text')
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <TextInput 
      style={[styles.container, {color: '#fff'}]}
      placeholder={placeholder}
      placeholderTextColor={'silver'}
      />
      <TouchableOpacity style={styles.search}>
      <Ionicons name='search' size={20} color={'#fff'} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        borderColor: '#636060',
        borderWidth: 2,
        borderRadius: 20,
        height: 50,
        width: '100%',
        backgroundColor: '#636060',
        paddingHorizontal: 10,
        paddingRight: 30,
        marginRight: 20,
    },
    search:{
        marginLeft: -40
    }
})