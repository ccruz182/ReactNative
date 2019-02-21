import React from "react";
import { StyleSheet, View } from "react-native";

import DataInput from "./src/components/DataInput/DataInput";
import ListItems from "./src/components/ListItems/ListItems";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: [],
    placeSelected: null,
    idSelected: 0
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  onItemSelected = id => {    
    this.setState(prevState => {
      return {
        placeSelected: prevState.places.find((places, i) => i === id),
        idSelected: id
      };
    });
  };

  placeDeletedHandler = id => {    
    this.setState(prevState => {
      return {
        places: prevState.places.filter((el, i) => i !== id),
        placeSelected: null
      };
    });
  }

  modalCloseHandler = () => {
    this.setState({placeSelected: null});
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          placeName={this.state.placeSelected}
          placeImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFdznaHvV6iP1bxQ9t5FFymEThNjWxEDaWtkUN1hf04frLqs1"
          onPlaceDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalCloseHandler}
          placeId={this.state.idSelected}
        />
        <DataInput
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}
          placeName={this.state.placeName}
        />

        <ListItems
          onItemSelected={this.onItemSelected}
          places={this.state.places}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
