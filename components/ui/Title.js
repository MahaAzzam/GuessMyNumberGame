import { Text, StyleSheet } from 'react-native';

function Title({ children }) {
    return ( 
        <Text style={styles.title}>{ children }</Text>
     );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize:24,
        color: 'white',
        borderColor: 'white',
        borderWidth:2,
        textAlign:'center',
        padding:12,
        maxWidth: '80%',
        width: 300
    }
})