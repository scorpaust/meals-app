import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children })
{
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}


export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        margin: 4,
        padding: 6
    }, 
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        textAlign: 'center'
    }
})