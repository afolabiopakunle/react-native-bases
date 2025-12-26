import { StyleSheet, Text } from 'react-native'

import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";

const Register = () => {

    const handleSubmit = () => {
        console.log('Register button pressed')
    }

    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>Register your account</ThemedText>

            <ThemedButton
                onPress={handleSubmit}
            >
                <ThemedText style={{textAlign: 'center'}} >Register</ThemedText>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/login">
                <ThemedText style={{ textAlign: 'center'}}>Login</ThemedText>
            </Link>
        </ThemedView>


    )
}
export default Register
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
    }
})
