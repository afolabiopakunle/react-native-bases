import {StyleSheet, Text, View} from 'react-native'
import {Link} from "expo-router";

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Page</Text>
            <Link style={styles.link} href="/about">About Page</Link>
            <Link style={styles.link} href="/">Home</Link>
        </View>
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