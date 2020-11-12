import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import DismissKeyboard from "./components/DismissKeyboard";
import GameScreen from "./screens/GameScreen";

const App = (props) => {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <DismissKeyboard>
      <View {...props} style={styles.screen}>
        <Header title={"Guess a Number"} />
        {content}
      </View>
    </DismissKeyboard>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
