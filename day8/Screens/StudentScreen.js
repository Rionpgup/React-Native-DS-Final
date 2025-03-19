import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const StudentScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Students App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f0f0f0', 
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', 
    }
});

export default StudentScreen;