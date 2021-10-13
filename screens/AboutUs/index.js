import React, { Component} from 'react'
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
  Image, Linking 
} from 'react-native';
export default class AboutUs extends Component {
  render() {
    return (
      <ScrollView style = {styles.container}>
        <View style = {styles.group} > 
          <View style = {styles.top}>
            <Text style = {styles.tittle}> - Our Mission - </Text>
            <Text style = {styles.content}>To provide  the most actionable app store data</Text>
          </View>
          <View style = {styles.bottom}>
            <Text style = {styles.tittle}>About</Text>
            <Text style = {styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Autem deleniti ipsam, vel, laborum, officiis porro earum recusandae distinctio eius ipsa voluptatum provident dolore optio sed sequi ex laudantium! Accusantium, quibusdam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius veniam iste eaque et minima neque pariatur quia ducimus. Ipsum minus sequi reiciendis maxime veritatis commodi. Odit tempora, sed laborum facere!</Text>
          </View>
        </View>
        <View style = {styles.group}>
          <Text style = {{...styles.tittle, marginBottom: 15}}>TEAMMATES</Text>
          <View style = {styles.minh}>
            <View style = {styles.img}>
              <Image source = {require('../../img/minh.png')} style = {{borderRadius: 175}}/>
            </View>
            <View style = {styles.name}> 
              <Text style = {{...styles.content, fontWeight: 'bold'}}>Vũ Nhật Minh</Text>
              <Text style = {styles.content}>D14CNPM8</Text>
            </View>
            <View style = {styles.describe}>
              <Text style = {{...styles.content, fontSize: 14}}>
               Lorem ipsum dolor sit amet consectetur adipisicing, elit. Autem deleniti ipsam, vel, laborum, officiis porro earum recusandae distinctio eius ipsa voluptatum provident dolore optio sed sequi ex laudantium! Accusantium
              </Text>
              <Text style = {{...styles.content, fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline', color: '#1e272e'}} onPress={() => Linking.openURL('https://github.com/0917214722')}>
                https://github.com/0917214722
              </Text>
            </View>
          </View>
          <View style = {styles.duy}>
            <View style = {styles.img}>
              <Image source = {require('../../img/duy.png')} style = {{borderRadius: 175}}/>
            </View>
            <View style = {styles.name}> 
              <Text style = {{...styles.content, fontWeight: 'bold'}}>Nguyễn Ngọc Duy</Text>
              <Text style = {styles.content}>D14CNPM8</Text>
            </View>
            <View style = {styles.describe}>
              <Text style = {{...styles.content, fontSize: 14}}>
               Lorem ipsum dolor sit amet consectetur adipisicing, elit. Autem deleniti ipsam, vel, laborum, officiis porro earum recusandae distinctio eius ipsa voluptatum provident dolore optio sed sequi ex laudantium! Accusantium
              </Text>
              <Text style = {{...styles.content, fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline',color: '#1e272e'}} onPress={() => Linking.openURL('https://github.com/duyvtvp1919')}>
                https://github.com/duyvtvp1919
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  group:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    
  },
  top:{
    marginBottom: 10
  },
  tittle:{
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  content:{
    fontSize: 16,
    textAlign: 'center'
  },
  minh:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  duy:{
    alignItems: 'center',
    justifyContent: 'center'
  },

});   