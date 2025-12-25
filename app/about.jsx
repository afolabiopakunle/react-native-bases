import {StyleSheet, useColorScheme} from 'react-native'
import {Link} from "expo-router";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

let themeColor = null;
const About = () => {
    const colorScheme = useColorScheme()
    themeColor = colorScheme;

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>About Page</ThemedText>
            <Link style={styles.link} href="/"><ThemedText>Home</ThemedText></Link>
            <Link style={[styles.link, {borderBottomColor: colorScheme === 'dark' ? 'white': '#333'}]} href="/contact"><ThemedText>Contact Page {themeColor}</ThemedText> </Link>
        </ThemedView>
    )
}
export default About

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