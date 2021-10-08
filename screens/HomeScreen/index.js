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
      data: data.screens,
      data2: data.screens2
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
        <Text style = {styles.tittle}>Thuật toán</Text>
        <FlatList
          data = {this.state.data}
          renderItem = {this.renderItem}
          keyExtractor = {item => item.id}
          numColumns = {1}
          style = {styles.list}
        />
        <Text style = {styles.tittle}>Mở rộng</Text>
        <FlatList
          data = {this.state.data2}
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
    // alignItems: 'center',
    // justifyContent: 'center', 
    backgroundColor: '#2f3640' 
  },
  button:{
    borderWidth: 1,
    paddingLeft: 10,
    width: '90%',
    marginBottom: 10,
    backgroundColor: '#8c7ae6',
    height: 75,
    borderColor: '#8c7ae6',
    justifyContent: 'center',
    borderRadius: 10, 
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    
  },
  list: {
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#fbc531',
    height: '100%',
    borderRadius: 15
  },
  tittle:{
    color: '#f5f6fa',
    textAlign: 'center',
    fontSize: 25,
  }
});
