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
  Image
} from 'react-native';

export default class BubbleSort extends Component{
  
  render(){
    return(
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {{textAlign:'center',fontSize:30,fontWeight:'bold'}}>Thuật toán sắp xếp nổi bọt (Bubble Sort)</Text>
          <View style = {styles.group}>
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Ý tưởng</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Xét lần lượt các cặp 2 phần tử liên tiếp. Nếu phần tử đứng sau nhỏ hơn phần tử đứng trước, ta đổi chỗ 2 phần tử. Nói cách khác, phần tử nhỏ nhất sẽ nổi lên trên.
              </Text>
              <Text style = {styles.contentText}>
               - Lặp lại đến khi không còn 2 phần tử nào thỏa mãn. Có thể chứng minh được số lần lặp không quá N−1, do một phần tử chỉ có thể nổi lên trên không quá N−1 lần.
              </Text>
            </View>
          </View>
          <View style = {styles.group}>
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Ưu điểm của thuật toán</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Code đơn giản, dễ hiểu.
              </Text>
              <Text style = {styles.contentText}>
               - Không tốn thêm bộ nhớ.
              </Text>
            </View>
          </View>
          <View style = {styles.group}>
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Nhược điểm của thuật toán</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Độ phức tạp O(N^2), không đủ nhanh với dữ liệu lớn..
              </Text>
              
            </View>
          </View>
          <View style = {styles.group}>
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Code C++</Text>
            </View>
            <View style = {styles.content}>
              <View style = {styles.codeArena}>
                <Image source ={require('./bbs.png')}
                style = {styles.image} />
              </View>
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
    backgroundColor: '#dcdde1'
  },
  group:{
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10
  },
  tittle:{
    borderBottomWidth: 1,
    borderBottomColor: '#718093'

  },
  tittleText:{
    fontSize: 30,
  },
  content:{
    marginTop: 10,
  },
  contentText:{
    fontSize: 20,
  },
  codeArena:{
    borderWidth: 1,
  },
  image:{
    width: 378,
 
  }
});   