import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import {Link} from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
    const theme = useColorScheme()
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Contact Page</ThemedText>
            <Link style={[styles.link, {borderColor: theme === 'dark' ? 'white' : '#333'}]} href="/about"><ThemedText>About Page</ThemedText></Link>
            <Link style={[styles.link, {borderColor: theme === 'dark' ? 'white' : '#333'}]} href="/"><ThemedText>Home</ThemedText></Link>
        </ThemedView>
    )
}
export default Contact

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
    }
})