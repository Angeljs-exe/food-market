import { StyleSheet, Text, View, } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from '../../assets'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn')
        }, 2000)

    }, [])
    return (
        <View style={{
            backgroundColor: '#FFC700',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Logo />
            <View style={{ height: 37 }} />
            <Text style={{ fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium' }}>SplashScreen</Text>
        </View>

    )
}

export default SplashScreen
