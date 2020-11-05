import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DeprecatedViewPropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    padding: 36,
    backgroundColor: "#f7278b",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
