import React, { Component } from "react";
import { View, Text } from "react-native";
import Draggable from "react-native-draggable";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Draggable
        ref={ref => (this.dragRef = ref)}
        reverse={false}
        // renderSize={56}
        // renderColor="black"
        offsetX={-100}
        offsetY={-200}
        // renderText="A"
        pressDragRelease={args =>
          alert(JSON.stringify(this.dragRef.getPosition()))
        }
        pressDrag={() => alert("touched!!")}
      >
        <View>
          <Text>Hi</Text>
        </View>
      </Draggable>
    );
  }
}
