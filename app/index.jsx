import {StyleSheet, View, Text, Image} from 'react-native'
import Logo from '../assets/img/logo_light.png'
import { Link } from "expo-router";

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo}/>
            <Text style={styles.title}>Shelfie Don</Text>
            <Text style={styles.card}>Index Afolabi</Text>
            <Text style={{ marginTop: 14}}>Index <Text style={{fontWeight: 'bold'}}>Jude</Text> Afolabi</Text>
            <Link style={styles.link} href="/about">About Page</Link>
            <Link style={styles.link} href="/contact">Contact Page</Link>
        </View>
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
        marginTop: 6
    }
})
