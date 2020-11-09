import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import DismissKeyboard from "./components/DismissKeyboard";

const App = (props) => {
  return (
    <DismissKeyboard>
      <View {...props} style={styles.screen}>
        <Header title={"Guess a Number"} />
        <StartGameScreen />
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
