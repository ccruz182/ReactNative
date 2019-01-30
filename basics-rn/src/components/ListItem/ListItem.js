import React from "react";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
// import placeImage from "../../../assets/GIFT.png"

const listItem = props => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFdznaHvV6iP1bxQ9t5FFymEThNjWxEDaWtkUN1hf04frLqs1"}} style={styles.placeImage}/>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#EEE",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default listItem;
