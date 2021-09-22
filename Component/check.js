import React, { Component } from 'react';
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

 export default class Bmi extends Component{
    constructor (props)
    {
        super(props);
        this.state ={
            weight: '0',
            height: '0',
            bmi: 0.00,
            level: 'Something',
        };
        this.compute = this.compute.bind(this);  
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.weight !== nextState.weight)
    //     {
    //         return false;
    //     }
    // }

    // componentDidMount(){

    // }
    // componentDidUpdate(){

    // }
    // componentWillUnmount(){

    // }
    compute(){
        const {weight,height} = this.state;
        const n_weight = parseFloat(weight);
        const n_height = parseFloat(height);
        const bmi = n_weight / Math.pow(n_height / 100, 2);
        this.setState({bmi:bmi});
        let lv = '';
        if (bmi > 32) {
            lv = 'Obese';
        }
        else if (25 < bmi && bmi < 32)
        {
            lv = 'Over Weight';
        }
        else if (18.5 < bmi && bmi < 25) {
            lv = 'Normal Weight';
        }
        else
        {
            lv = 'Under Weight';
        }
        this.setState({level:lv});
    }
    render(){
        return (
        <View style = {styles.container}>
            <Text style = {styles.app_tittle}>BMI APPLICATION</Text>

            <View style = {styles.group}>
                <Text style = {styles.tittle}>WEIGHT (KG)</Text>
                <TextInput style = {styles.input} keyboardType = 'numeric' 
                value = {this.state.weight} onChangeText = {(value) => {this.setState({weight:value})}}></TextInput>
            </View>

            <View style = {styles.group}>
                <Text style = {styles.tittle}>HEIGHT (CM)</Text>
                <TextInput style = {styles.input} keyboardType = 'numeric' 
                value = {this.state.height} onChangeText = {(value) => {this.setState({height:value})}}></TextInput>
            </View>     

            <View style = {styles.center}>
                <View style = {styles.group}> 
                    <Text style = {styles.tittle}>BMI: {this.state.bmi.toFixed(2)}</Text>
                </View>
                <View style = {styles.group}>
                    <Text style = {styles.level}>{this.state.level}</Text>
                    <TouchableOpacity style = {styles.button} onPress = {this.compute}>
                        <Text style = {styles.buttonText}>Compute</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        );
      }
}
                                                    
var styles = StyleSheet.create({
   container: {
    //    flex:1,
    //    justifyContent: 'center',
    //    alignItems: 'center',
    //    padding: 20
   },
   group: {
       marginTop: 20,

   },
   app_tittle: {
       fontSize: 30,
       fontWeight: 'bold',
       textAlign: 'center',

   },
   tittle: {
       fontSize: 20,
        
   },
   button: {
       backgroundColor: 'lightblue',
       padding: 10,
       borderWidth: 1,
       width: 120,
       textAlign:'center',
   },
   buttonText: {
       fontSize: 15,
       textAlign: 'center',
   },
   input: {
       borderWidth: 1,
       height: 50,
       padding: 10,
       fontSize: 20,
   },
   center: {
       alignItems: 'center',
   },
   level:{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
   },
})