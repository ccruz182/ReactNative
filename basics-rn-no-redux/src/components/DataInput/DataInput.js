import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const DataInput = props => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      onChangeText={props.placeNameChangeHandler}
      value={props.placeName}
    />

    <Button
      style={styles.button}
      title="Add"
      onPress={props.placeSubmitHandler}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 2,
    padding: 2
  },
  button: {
    width: "30%"
  }
});

export default DataInput;
