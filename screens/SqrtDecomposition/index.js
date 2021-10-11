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
import Problem1 from './Problem1';
import Problem2 from './Problem2';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
export default class index extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Bài toán số 1" component={Problem1}/>
        <Tab.Screen name="Bài toán số 2" component={Problem2} />
      </Tab.Navigator>
    )
  }
}
