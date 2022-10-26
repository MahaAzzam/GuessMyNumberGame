import { StyleSheet, View, Text } from 'react-native';

import Colors from './../../constants/colors';

function NumberContainer({children}) {
    return ( 
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
     );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderRadius:8,
        borderColor: Colors.accent500,
        padding:24,
        margin:4,
        alignItems:'center',
    },
    numberText:{
        fontSize:36,
        fontWeight:'bold',
        color:Colors.accent500,
        justifyContent:'center'
    }
})