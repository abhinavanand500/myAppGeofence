import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
export default class App extends Component<{}>{
  render(){
    return(
      <View style={styles.container}>
        <Text>Hii There</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor : '#6226BC',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
