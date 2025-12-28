import { Pressable, StyleSheet, Text, TextInput } from 'react-native'

import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router"
import { Colors } from '../../constants/Colors'
import ThemedButton from "../../components/ThemedButton";

const Login = () => {
    const handleSubmit = () => {
        console.log('login button pressed!!!')
    }

    return (
        <ThemedView style={styles.container}>

            <Spacer/>
            <ThemedText title={true} style={styles.title}>Login to your account</ThemedText>

            <Spacer height={100}/>
            <Link href="/register">
                <ThemedText style={{ textAlign: 'center' }}>Register</ThemedText>
            </Link>

            <TextInput placeholder='Email' />

            <Spacer />
            <ThemedButton
                onPress={handleSubmit}
                >
                <ThemedText style={{textAlign: 'center'}} >Login Pressable</ThemedText>
            </ThemedButton>
        </ThemedView>
    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8
    }
})
