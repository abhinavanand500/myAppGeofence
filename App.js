import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
const App=()=>{
  Geolocation.getCurrentPosition(data=>console.warn(data.coords.latitude))
  return(
    <View>
      <Text style={{fontSize:70}}>Longitude Latitude</Text>
    </View>
  )
}

export default App