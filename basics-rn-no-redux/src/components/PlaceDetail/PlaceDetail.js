import React from "react";
import { Button, Image, Modal, StyleSheet, Text, View } from "react-native";

const PlaceDetail = props => {
  if (props.placeName !== null) {
    return (
      <Modal onRequestClose={props.onModalClosed} animationType="slide">
        <View style={style.modalContainer}>
          <Image source={{ uri: props.placeImage }} style={style.placeImage} />
          <Text style={style.placeName}>{props.placeName}</Text>          
          <View>
            <Button style={style.buttons} title="Delete" color="red" onPress={props.onPlaceDeleted}/>
            <Button style={style.buttons} title="Close" color="green" onPress={props.onModalClosed}/>
          </View>
        </View>
      </Modal>
    );
  }
  return null;
};

const style = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: 250, height: 250
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 25 
  },
  buttonsContainer: {
    flexDirection: "column", 
    alignItems: "center"
  },
  buttons: {
    padding: 50,
    fontSize: 18
  }
});
export default PlaceDetail;
