import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert, Keyboard } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmedInput, setconfirmedInput] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setconfirmedInput(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber > 99 ||
      enteredValue.length === 0
    ) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    setconfirmedInput(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmedInput) {
    confirmedOutput = (
      <Card style={styles.chosenNumberContainer}>
        <Text>You selected:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Start a New Game!</TitleText>
      <Card style={styles.inputContainer}>
        <BodyText>Select a number:</BodyText>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={Colors.secondary}
            />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={confirmInputHandler} />
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  button: {
    width: "40%",
  },
  chosenNumberContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
