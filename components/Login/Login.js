import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./components/Login/images/coffee.png')}/>
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
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  logo: {
      width: 100,
  },
  title:{
    color: 'white',
    marginTop: 10,
    width: 160,
  },
});
