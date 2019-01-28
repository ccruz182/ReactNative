import React from "react";
import { StyleSheet, View } from "react-native";

import DataInput from "./src/components/DataInput/DataInput";
import ListItems from "./src/components/ListItems/ListItems";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
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

  onItemDeleted = id => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((el, i) => i !== id)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DataInput
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}
          placeName={this.state.placeName}
        />

        <ListItems
          onItemDeleted={this.onItemDeleted}
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
