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
export default class SomeThing extends Component {
    constructor(props){
        super(props);
        this.navigation = props.navigation;
        this.state = {
            data: props.route.params 
        }
      }
    render() {
        return (
            <View>
                <Text>
                    alo 1234455
                </Text>
            </View>
        )
    }
}
