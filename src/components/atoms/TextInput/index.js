import { StyleSheet, Text, View, TextInput as TextIn } from 'react-native'
import React from 'react'

const TextInput = ({ label, placeholder }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextIn style={styles.input} placeholder={placeholder} />
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#020202',
        padding: 10
    },
})