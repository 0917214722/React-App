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
  Image,
  Switch,
} from 'react-native';
const data = require('../../constants/User.json')
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.goToRegister = this.goToRegister.bind(this);
    this.state = {
      data: data.User,
      check: '',
      User: '',
      Pass: '',
      showPassword: true,
    }
  }
  goToRegister() {
    this.navigation.navigate('Regis');
  }
  checkuser() {
    let cnt = 0;
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].user === this.state.User && this.state.Pass === this.state.data[i].pass) {
        cnt++;
      }
    }
    if (cnt == 1) {
      this.navigation.navigate('Home');
      alert("Đăng nhập thành công !!!");
    }
    else {
      alert("Đăng nhập Thất bại !!!");
    }
  }
  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  render() {
    return (
      <View style={{
        width: "100%", height: "100%", justifyContent: 'center',
        alignSelf: 'center', alignContent: 'center', alignItems: 'center'
      }}>
        <TextInput placeholder={"Enter username"} style={{ height: 42, width: "80%", borderBottomWidth: 1, borderColor: "#4cd137" }} value={this.state.User} onChangeText={(value) => { this.setState({ User: value }) }} />
        <View style={{ ...styles.group, borderBottomWidth: 1, borderColor: "#4cd137" }}>
          <TextInput placeholder={"Enter password"} style={{ height: 42, width: "80%", marginTop: "5%" }} value={this.state.Pass} onChangeText={(value) => { this.setState({ Pass: value }) }} autoCompleteType="password" secureTextEntry={this.state.showPassword} />
          <Switch
            onValueChange={this.toggleSwitch}
            value={!this.state.showPassword}
            style={{ marginTop: 15 }}
          />
          <Text style={{ marginTop: 25 }}>Show</Text>
        </View>

        <View style={styles.group}>
          <TouchableOpacity style={styles.button} onPress={this.checkuser.bind(this)}>
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.goToRegister}>
            <Text style={{ color: "white" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  group: {
    marginTop: "10%",
    width: "80%",
    flexDirection: 'row'
  },
  group1: {
    marginTop: "10%",
    width: "80%",
    flexDirection: 'row'
  },
  button: {
    borderWidth: 1,
    height: 42,
    width: "50%",
    borderRadius: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "#4cd137",
    borderColor: "#4cd137",
    marginLeft: 5
  }
})