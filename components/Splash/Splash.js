import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>No papercup!</Text>
        </View>
        <View>
            <Text style={styles.subtitle}>Powered by Tiggacom</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper:{
      flex:1,
      justifyContent: 'center',
  },
  title:{
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle:{
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20,
  }
});
