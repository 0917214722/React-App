import React, { Component } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createMaterialTopTabNavigator();
import BubbleSort from '../BubbleSort/bbSort';
import HeapSort from './heapSort';
import InsertionSort from './insertionSort';
export default class SortScreens extends Component{
  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {
        data: props.route.params 
    }
  }
  render(){
    return(
      <Tab.Navigator>
        <Tab.Screen name="Bubble Sort" component={BubbleSort} />
        <Tab.Screen name="Heap Sort" component={HeapSort} />
        <Tab.Screen name="Insertion Sort" component={InsertionSort} />
      </Tab.Navigator>
    )
  }
}
const styles = StyleSheet.create({
    
});