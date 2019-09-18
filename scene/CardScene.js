import React, { Component } from "react";
import { View, Text, PanResponder, Animated } from "react-native";

export default class CardScene extends Component {
  constructor(props) {
    super(props);

    this.state = { xPos: new Animated.Value(0) };

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        this.setState({ xPos: gestureState.dx });
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        this.setState({ xPos: 0 });
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    });
  }

  render() {
    return (
      <Animated.View
        {...this._panResponder.panHandlers}
        style={[
          // StyleSheet.absoluteFill,
          {
            width: 100,
            height: 100,
            backgroundColor: "red",
            transform: [{ translateX: this.state.xPos }]
          }
        ]}
      >
        {/* <View style={{ width: 200, height: 200, backgroundColor: "red" }} /> */}
      </Animated.View>
    );
  }
}
