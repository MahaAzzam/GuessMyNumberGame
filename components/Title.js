import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function Title({ children }) {
    return ( 
        <Text style={styles.title}>{ children }</Text>
     );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color: Colors.accent500,
        borderColor: Colors.accent500,
        borderWidth:2,
        textAlign:'center',
        padding:12
    }
})