import { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screeens/StartGameScreen';
import GameScreen from './screeens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screeens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false)
  }

  function gameOverHandler (numberOfGuesses) {
    setIsGameOver(true);
    setGuessRounds(numberOfGuesses)
  }

  function startNewGameHandler () {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(isGameOver && userNumber){
    screen = <GameOverScreen onStartNewGame={startNewGameHandler} userNumber={userNumber} roundsNumber={guessRounds}  />;
  }
  return (
    <>
      <StatusBar style='light' />
      <LinearGradient 
        colors={[Colors.primary700, Colors.accent500]} 
        style={styles.rootScreen}
      >
        <ImageBackground 
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
