import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import SortScreens from './screens/SortScreens';
import SomeThing from './screens/SomeThing';
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: 'Lập trình không khó !!!',
            headerTintColor: '#ffffff',
            headerTitleAlign: 'center',
              headerStyle:{
                backgroundColor: '#4cd137',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              }

        }} // style header bar
        ></Stack.Screen>
        <Stack.Screen
          name='Thuật toán sắp xếp !!!'
          component={SortScreens}
          options={{title: 'Sắp xếp !!!',
            headerTintColor: '#ffffff',
            headerTitleAlign: 'center',
              headerStyle:{
                backgroundColor: '#4cd137',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              }
        }}></Stack.Screen>
        <Stack.Screen
           name='SomeThing'
           component={SomeThing}
           options={{title: 'SomeThing !!!',
             headerTintColor: '#ffffff',
             headerTitleAlign: 'center',
               headerStyle:{
                 backgroundColor: '#4cd137',
               },
               headerTitleStyle: {
                 fontWeight: 'bold',
               }
         }}
        ></Stack.Screen>
        
      </Stack.Navigator>   
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
});

