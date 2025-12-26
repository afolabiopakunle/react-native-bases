import { useColorScheme } from 'react-native'
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../constants/Colors";

const AuthLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <>
            <StatusBar style='auto'/>
            <Stack screenOptions={{ headerShown: false, animation: 'none' }}/>
        </>
    )
}
export default AuthLayout
