import React from "react";
import { StyleSheet, View } from "react-native";
import { connect, Provider } from "react-redux";

import DataInput from "./src/components/DataInput/DataInput";
import ListItems from "./src/components/ListItems/ListItems";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

import configuredStore from "./store/configureStore";
import {addPlace, deletePlace, selectPlace, unselectPlace} from "./store/actions/index"

class App extends React.Component {
  state = {
    placeName: ""
  };

  store = configuredStore();

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onAddPlace(this.state.placeName);    
  };

  onItemSelected = id => {
    this.props.onSelectPlace(id);
  };

  placeDeletedHandler = id => {
    this.props.onDeletePlace(id);
  };

  modalCloseHandler = () => {
    this.props.onUnselectPlace();
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    placeSelected: state.places.placeSelected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: id => dispatch(deletePlace(id)),
    onSelectPlace: id => dispatch(selectPlace(id)),
    onUnselectPlace: () => dispatch(unselectPlace())

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
