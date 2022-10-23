import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');
    
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 0 and 99.',
                [{text:'Ok', style:'cancel', onPress:resetInputHandler}]
            );
            return;
        }
        
        onPickNumber(chosenNumber);
    }
    return ( 
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2} 
                keyboardType="number-pad" 
                autoCapitalize="none" 
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
             />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View> 
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor:'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity:0.25,
        shadowRadius:6
    },
    numberInput:{
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        borderBottomWidth: 2,
        marginVertical: 8,
        textAlign:'center',
        fontWeight:'bold'
    },
    buttonsContainer: {
        flexDirection:'row'
    },
    buttonContainer: {
        flex:1
    }
})