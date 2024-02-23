import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  increaseCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    console.log("render");
    return (
      <View style={styles.container}>
        <Text onPress={this.increaseCounter}>Click to Increase Counter</Text>
        <Text style={styles.counterText}>Counter: {this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    marginTop: 20, // テキストの上に余白を設定する場合
  },
});

export default LifecycleExample;
