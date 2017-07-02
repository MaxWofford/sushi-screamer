import React from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableHighlight } from 'react-native';

class Rolls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountRolls: props.amountRolls 
    };
  }

  render() {
    return  (
      <Text>
        Rolls: { this.state.amountRolls  }
      </Text>
    );
  }
}


export default class App extends React.Component {
  constructor() {
    super(props);
    this.state = {
      amountRolls: 0;
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress = {() => Alert.alert('ohhh shit whatdup') }>
          <Text>BUY BUY BUY</Text>
        </TouchableHighlight>
        
        <TouchableHighlight onPress = {() => Alert.alert('ohhh shit whatdup') }>
          <Image source={require('./assets/stefan.jpg')} />
        </TouchableHighlight>

        <Rolls amountRolls= {this.state.amountRolls}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
