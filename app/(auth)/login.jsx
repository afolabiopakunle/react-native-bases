import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native'

import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router"
import { Colors } from '../../constants/Colors'
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('login button pressed!!!', email, password);
        const trimmed = email.trim();
        console.log({ trimmed })
        setEmail('');
        setPassword('')
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>

                <Spacer/>
                <ThemedText title={true} style={styles.title}>Login to your account</ThemedText>

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder='Email'
                    keyboardType='email-address'
                    fontSize={18}
                    onChangeText={setEmail}
                    value={email}
                />

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder='Password'
                    fontSize={18}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <Spacer/>
                <ThemedButton
                    onPress={handleSubmit}
                >
                    <ThemedText style={{ textAlign: 'center', color: '#fff' }}>Login</ThemedText>
                </ThemedButton>

                <Spacer height={100}/>
                <Link href="/register">
                    <ThemedText style={{ textAlign: 'center' }}>Register?</ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
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
