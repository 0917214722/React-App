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
  Dimensions,
  Linking,
  Button
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class Forum extends Component{
  constructor(props){
    super(props);
    this.state = {
      tableHead1: ['Các kì thi online', 'Bài viết	', 'Bài viết cuối'],
      tableData1: [
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/30/')}>Thông báo </Text>,
          '95', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/30/5658/')}>Giới thiệt admin</Text>
        ],
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/11/')}>Các kỳ thi của VNOI</Text>,
          '518', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/11/5384/')}>Gợi ý các bài VNOI Online 2021</Text>
        ],
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/1/')}>Codeforces </Text>,
          '112', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/1/5623/')}>Codeforces Round #359</Text>
        ],
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/2/')}>Topcoder</Text>,
          '0', 
          'Chưa có bài viết'
        ],
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/12/')}>Các kỳ thi khác</Text>,
          '73', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/12/5636/')}>July Challenge 2016</Text>
        ]
      ],
      tableHead2: ['Online Judge', 'Bài viết	', 'Bài viết cuối'],
      tableData2: [
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/3/')}>VOJ, SPOJ</Text>,
          '133', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/3/5587/')}>LQDFROG Xin thuật toán</Text>
        ],
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/4/')}>Các OJ khác</Text>,
          '13', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/4/5391/')}>[FPC] chương trình ra kết quả trên ideone khác kết quả ra trên máy</Text>
        ]
      ],
      tableHead3: ['Thi Quốc gia, Quốc tế','Bài viết','Bài viết cuối'],
      tableData3: [
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/13/')}>Thi HSG Quốc gia, Quốc Tế</Text>,
          '374', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/13/5432/')}>Nhận xét về kì thi quốc gia 2016</Text>
        ],
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/15/')}>ACM</Text>,
          '205', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/15/5580/')}>2016 ACM-ICPC Phuket World Finals</Text>
        ],
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/16/')}>Các kỳ thi khác</Text>,
          '29', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/16/5548/')}>Kỳ thi duyên hải năm 2016</Text>
        ]
      ],
      tableHead4: ['Thảo luận chung','Bài viết','Bài viết cuối'],
      tableData4: [
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/5/')}>Thuật toán</Text>,
          '265', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/5/5629/')}>Nhân ma trận</Text>
        ],
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/6/')}>Ngôn ngữ lập trình</Text>,
          '30 ', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/6/5097/')}>Góc nhìn d_t_nguyen: Cần phải làm gì để học Machine learning</Text>
        ],
        [
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/148/')}>Các kỳ thi khác</Text>,
          '79', 
          <Text style={{color: 'blue', margin: 6}} onPress={() => Linking.openURL('https://vnoi.info/forum/148/5278/')}>Tìm lớp học lập trình</Text>
        ]
      ],
    }
  }
  
  
  render(){
    return(
      <ScrollView>
        <View style = {styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#718093'}}>
            <Row data={this.state.tableHead1} style={styles.head} textStyle={{...styles.text,color:'#ffffff'}}/>
            <Rows data={this.state.tableData1} textStyle={styles.text}/>
            <Row data={this.state.tableHead2} style={styles.head} textStyle={{...styles.text,color:'#ffffff'}}/>
            <Rows data={this.state.tableData2} textStyle={styles.text}/>
            <Row data={this.state.tableHead3} style={styles.head} textStyle={{...styles.text,color:'#ffffff'}}/>
            <Rows data={this.state.tableData3} textStyle={styles.text}/>
            <Row data={this.state.tableHead4} style={styles.head} textStyle={{...styles.text,color:'#ffffff'}}/>
            <Rows data={this.state.tableData4} textStyle={styles.text}/>
          </Table>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, 
    paddingTop: 10, 
    backgroundColor: '#dcdde1'
  },
  head: { 
    height: 50, 
    backgroundColor: '#40739e'
  },
  text: { 
    margin: 6 
  },
});