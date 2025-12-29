import { useColorScheme } from 'react-native'
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";

const AuthLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    const { user } = useUser();
    console.log(user)

    return (
        <>
            <StatusBar style='auto'/>
            <Stack screenOptions={{ headerShown: false, animation: 'none' }}/>
        </>
    )
}
export default AuthLayout
