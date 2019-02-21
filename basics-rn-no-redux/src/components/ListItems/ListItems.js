import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const ListItems = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => props.onItemSelected(i)}
    />
  ));

  return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    padding: 10
  }
});

export default ListItems;
