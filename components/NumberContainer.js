import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: Colors.secondary,
  },
  number: {
    color: Colors.secondary,
    fontSize: 22,
  },
});
