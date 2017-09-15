import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import Splash from './components/Splash/Splash';
import Splash from './components/Login/Login';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26A65B',
  },
});
