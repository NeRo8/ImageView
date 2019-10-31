/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {highlightTrailingWhitespace} from 'jest-matcher-utils';

//Ці значення береш з картинки (тільки для локальних картинок) з серверних картинок треба по іншому робити
const imgWidth = 2880;
const imgHeight = 1047;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iWidth: 0,
      iHeight: 0,
      imgURL:
        'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/north-america/united-states/newyork/newyork_NationalGeographic_2328428.adapt.1900.1.jpg',
    };
  }

  componentDidMount() {
    Image.getSize(this.state.imgURL, (width, height) => {
      this.setState({
        iWidth: width,
        iHeight: height,
      });
    });
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <View
          style={{
            width: '100%',
            height: imgHeight / (imgWidth / Dimensions.get('window').width),
          }}>
          <Image
            source={require('./1.jpg')}
            style={{flex: 1, width: null, height: null}}
            resizeMode="contain"
          />
        </View>

        {this.state.iHeight !== 0 ? (
          <View
            style={{
              marginTop: 20,
              width: '100%',
              height:
                this.state.iHeight /
                (this.state.iWidth / Dimensions.get('window').width),
            }}>
            <Image
              source={{uri: this.state.imgURL}}
              style={{flex: 1, width: null, height: null}}
              resizeMode="contain"
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default App;
