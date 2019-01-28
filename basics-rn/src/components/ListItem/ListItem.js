import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const listItem = props => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#EEE"
  }
});

export default listItem;
