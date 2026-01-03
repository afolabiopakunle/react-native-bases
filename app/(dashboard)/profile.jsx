import { StyleSheet } from 'react-native'
import { useUser } from "../../hooks/useUser";

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
    const { logout } = useUser();

    return (
        <ThemedView safe={true} style={styles.container}>

            <ThemedText title={true} style={styles.heading}>
                Your Email
            </ThemedText>
            <Spacer />

            <ThemedText>Time to start reading some books...</ThemedText>
            <Spacer />

            <ThemedButton onPress={logout}>
                <ThemedText style={{color: 'white'}}>Logout</ThemedText>
            </ThemedButton>
        </ThemedView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
})