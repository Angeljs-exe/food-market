import React from "react";
import { SignIn, SignUp, SplashScreen } from "../pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='SplashScreen'
                    component={SplashScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name='SignIn'
                    component={SignIn}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name='SignUp'
                    component={SignUp}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Router