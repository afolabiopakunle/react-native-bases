import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors"
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserProvider } from "../contexts/UserContext";

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <>
            <UserProvider>
                <SafeAreaProvider>
                    <StatusBar style='auto'/>
                    <Stack
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: theme.navBackground,
                            },
                            headerTintColor: theme.title,
                        }}
                    >

                        <Stack.Screen name='index' options={{ title: 'Home' }}/>
                        <Stack.Screen name='(dashboard)' options={{ headerShown: false }}/>
                        <Stack.Screen name='(auth)' options={{ headerShown: false }}/>
                    </Stack>
                </SafeAreaProvider>
            </UserProvider>
        </>
    )
}
export default RootLayout
const styles = StyleSheet.create({})
