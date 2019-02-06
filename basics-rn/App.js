import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import DataInput from "./src/components/DataInput/DataInput";
import ListItems from "./src/components/ListItems/ListItems";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

import configuredStore from "./store/configureStore";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: [],
    placeSelected: null
  };

  store = configuredStore();

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
        placeSelected: prevState.places.find((places, i) => i === id)
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
  };

  modalCloseHandler = () => {
    this.setState({ placeSelected: null });
  };

  render() {
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <PlaceDetail
            placeName={this.state.placeSelected}
            placeImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFdznaHvV6iP1bxQ9t5FFymEThNjWxEDaWtkUN1hf04frLqs1"
            onPlaceDeleted={this.placeDeletedHandler}
            onModalClosed={this.modalCloseHandler}
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
      </Provider>
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
