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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class Forum extends Component{
  constructor(props){
    super(props);
    this.state = {
      tableHead1: ['Các kì thi online', 'Bài viết	', 'Bài viết cuối'],
      tableData1: [
        ['Thông báo', '95', 'Giới thiệu về vnoi'],
        ['Các kỳ thi của VNOI', '518', 'Gợi ý các bài VNOI Online 2016'],
        ['Codeforces', '112', 'Codeforces Round #359'],
        ['Topcoder', '0', '	Chưa có bài viết'],
        ['Các kỳ thi khác', '79', '	July Challenge 2016']
      ],
      tableHead2: ['Online Judge', 'Bài viết	', 'Bài viết cuối'],
      tableData2: [
        ['VOJ, SPOJ', '133', 'LQDFROG Xin thuật toán'],
        ['Các OJ khác', '112', '[FPC] chương trình ra kết quả trên ideone khác kết quả ra trên máy']
      ],
      tableHead3: ['Thi Quốc gia, Quốc tế','Bài viết','Bài viết cuối'],
      tableData3: [
        ['Thi HSG Quốc gia, Quốc Tế', '374', 'Nhận xét về kì thi quốc gia 2016.'],
        ['ACM', '205', '2016 ACM-ICPC Phuket World Finals !'],
        ['Các kỳ thi khác', '29	', 'Kì thi duyên hải 2016']
      ],
      tableHead4: ['Thảo luận chung','Bài viết','Bài viết cuối'],
      tableData4: [
        ['Thuật toán', '265', 'Nhân ma trận.'],
        ['Machine Learning', '30', 'Cần phải làm gì để học machine learning.'],
        ['Ngôn ngữ lập trình', '79	', 'Tìm lớp học lập trình']
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
  }


});