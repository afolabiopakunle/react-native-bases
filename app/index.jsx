import {StyleSheet, View, Text, Image} from 'react-native'
import { Link } from "expo-router";

// Themed Components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />
            <Text style={styles.title}>Shelfie Don</Text>
            <ThemedText style={styles.card}>Index Afolabi</ThemedText>
            <Spacer height={10} />
            <ThemedText>Index <Text style={{fontWeight: 'bold'}}>Jude</Text> Afolabi</ThemedText>
            <ThemedText>Major changes</ThemedText>
            <Link style={styles.link} href="/login"> <ThemedText style={{color: 'skyblue'}}>Login Page</ThemedText> </Link>
            <Link style={styles.link} href="/profile"> <ThemedText style={{color: 'skyblue'}}>Dashboard Page</ThemedText> </Link>
            <Link style={styles.link} href="/register"> <ThemedText style={{color: 'skyblue'}}>Register Page</ThemedText> </Link>
        </ThemedView>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    card: {
        marginTop: 10,
        textTransform: 'capitalize',
        borderRadius: 5,
        backgroundColor: '#eeb',
        padding: 16,
        boxShadow: '5px 5px rgba(0, 0, 0, 0.2)'
    },
    link: {
        borderBottomWidth: 1,
        marginTop: 6,
        borderColor: 'white'
    }
})
