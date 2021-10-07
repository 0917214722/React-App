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
  FlatList,
} from 'react-native';
const data = require('../../constants/sceens.json');
export default class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.gotoDetail = this.gotoDetail.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      data: data.screens
    }
  }
  gotoDetail(name){
    this.navigation.navigate(name,{name:name});
  }
  renderItem({item}){
    return(
      <TouchableOpacity style = {{...styles.button}} onPress = {() => this.gotoDetail(item.name)}>
        <Text style = {styles.buttonText}>{item.name} </Text>
      </TouchableOpacity>
    )
  }
  render(){   
    return(
      <View style = {styles.container}>
        <FlatList
          data = {this.state.data}
          renderItem = {this.renderItem}
          keyExtractor = {item => item.id}
          numColumns = {1}
          style = {styles.list}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  button:{
    borderWidth: 1,
    paddingLeft: 10,
    width: '100%',
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#8c7ae6',
    height: 75,
    borderColor: '#8c7ae6',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    
  },
  list: {
    marginTop: 25,
  }
});
