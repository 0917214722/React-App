import React, { Component } from 'react'
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Switch,
	Text,
	TextInput,
	TouchableOpacity,
	useColorScheme,
	View,
  Dimensions
} from 'react-native';
import {
  PieChart
} from "react-native-chart-kit";
const dataChart = require('../../constants/chart.json')
const screenWidth = Dimensions.get('window').width
export default class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataChart: dataChart.chart
    }
    
  }
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.tittle}>
          <Text style = {styles.tittleText}>
            Top 10 ngôn ngữ lập trình phổ biến nhất 2020 !!!!
          </Text>
        </View>
        <PieChart
        data={this.state.dataChart}
        width={screenWidth}
        height={280}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#222f3e',
    height: "100%"
  },
  tittle: {

  },
  tittleText: {
    color: '#f5f6fa',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
