import { useState } from 'react';
import { View, 
    TextInput, 
    StyleSheet, 
    Alert, 
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from './../components/ui/Card';
import InstructionText from './../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();
    
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

    const marginTopDistance = height < 380 ? 30 : 100;
    return ( 
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTopDistance}]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
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
                    </Card>
                </View> 
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer:{
        flex:1, 
        // marginTop:100,
        alignItems:'center'
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