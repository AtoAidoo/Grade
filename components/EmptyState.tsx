import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const EmptyState = ({title, subtitle, titleSize,subtitleSize}:{
    title: string
    subtitle: string
    titleSize: number
    subtitleSize: number
}) => {
    const textColor = useThemeColor({}, 'text');

  return (
    <View style={styles.container }>
        <MaterialCommunityIcons name="folder-hidden" size={50} color= {textColor} />
        <Text style={{color: textColor, fontSize: titleSize}}>{title}</Text>
        <Text style={{color: textColor, fontSize: subtitleSize}}>{subtitle}</Text>
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,

    },
    text1: {
        color: '#ddd',
        
    },
    text2: {
        color: '#ccc',
        
    }

})