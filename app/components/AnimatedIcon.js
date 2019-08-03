import React, {Component} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import icon from '../assets/image/icon_react_native.png';

class AnimatedIcon extends Component {

  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);

  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.spinValue, {
          toValue: 1,
          duration: 600,
          easing: Easing.linear,
        }),
        Animated.timing(this.spinValue, {
          toValue: 0,
          duration: 600,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  }

  render() {
    const scale = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.7, 1],
    });
    return (
      <Animated.Image
        style={{
          width: 227,
          height: 200,
          transform: [{scale: scale}],
        }}
        source={icon}
      />
    );
  }
}

const styles = StyleSheet.create({});

export default AnimatedIcon;
