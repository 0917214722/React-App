import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SortScreens from './screens/SortScreens';
import ArrAndLinkList from './screens/ArrAndLinkList';
import Login from './screens/Login';
import Chart from './screens/Chart';
const Stack = createNativeStackNavigator();
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
      <Stack.Navigator>
      {/* <Stack.Screen
          name='Login'
          component={Login}
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
        ></Stack.Screen> */}
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
           name='Top 10 ngôn ngữ lập trình phổ biến !!!'
           component={Chart}
           options={{title: 'Top 10 ngôn ngữ lập trình phổ biến !!!',
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
        <Stack.Screen
           name='Mảng và danh sách liên kết !!!'
           component={ArrAndLinkList}
           options={{title: 'Mảng và danh sách liên kết !!!',
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

