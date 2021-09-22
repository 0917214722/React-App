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
export default class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.gotoDetail = this.gotoDetail.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      data:[
        {id :1, name: 'Thuật toán sắp xếp !!!'},
        {id :2, name: 'SomeThing'},
        {id :3, name: 'minhvn'},
      ]
    }
  }
  gotoDetail(name){
    // console.log(name);
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
    // let renderButton = this.state.data.map((item,index) => (
    //       <TouchableOpacity key = {index} style = {styles.button} onPress = {() => this.gotoDetail(item.name)}>
    //         <Text style = {styles.buttonText}>Go to {item.name} screen </Text>
    //       </TouchableOpacity>
    //     ))

        
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
    // alignItems: 'center',
    // justifyContent: 'center', 
    
  },
  title:{
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button:{
    borderWidth: 1,
    padding: 10,
    width: '100%',
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#8c7ae6',
    height: 75,
  },
  buttonText:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  list: {
    marginTop: 25,
  }
});
