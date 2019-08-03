import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import screenNames from '../navigation/ScreenName';
import AnimatedIcon from '../components/AnimatedIcon';

const simulateSplashLoadingTime = 3000; // milliseconds

class SplashScreen extends Component {

  componentDidMount() {
    this.initialApp();
  }

  initialApp = () => {
    this.timeoutHandler = setTimeout(() => {
      if (this.props.navigation) {
        this.props.navigation.navigate(screenNames.HomeScreen, {});
        clearTimeout(this.timeoutHandler);
      }
    }, simulateSplashLoadingTime);
  };

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <AnimatedIcon/>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>
              React Native BoilerPlate
            </Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: '100%',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: 24,
  },
  bottomText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#61dafb',
  },
});

export default SplashScreen;
