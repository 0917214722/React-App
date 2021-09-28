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
	// const heap = require ('./heapSort.PNG')
export default class HeapSort extends Component {
	constructor(props){
    super(props);
    this.state = {
      currentImg: require('../../img/heapSort.png'),
    
    }
  }
    render() {
        return (
        	<ScrollView>
						<View style = {styles.container}>
							<Text style = {{textAlign:'center',fontSize:30,fontWeight:'bold'}}>Thuật toán sắp xếp vun đống (Heap Sort)</Text>
							<View style = {styles.group}>
								<View style = {styles.tittle}>
									<Text style = {styles.tittleText}>Ý tưởng</Text>
								</View>
								<View style = {styles.content}>
									<Text style = {styles.contentText}>
									- Ta lưu mảng vào CTDL Heap.
									</Text>
									<Text style = {styles.contentText}>
									- Ở mỗi bước, ta lấy ra phần tử nhỏ nhất trong heap, cho vào mảng đã sắp xếp.
									</Text>
								</View>
							</View>
							<View style = {styles.group}>
								<View style = {styles.tittle}>
									<Text style = {styles.tittleText}>Ưu điểm của thuật toán</Text>
								</View>
								<View style = {styles.content}>
									<Text style = {styles.contentText}>
									- Cài đặt đơn giản nếu đã có sẵn thư viện Heap.
									</Text>
									<Text style = {styles.contentText}>
									- Chạy nhanh, độ phức tạp O(N∗logN).
									</Text>
								</View>
							</View>
							<View style = {styles.group}>
								<View style = {styles.tittle}>
									<Text style = {styles.tittleText}>Nhược điểm của thuật toán</Text>
								</View>
								<View style = {styles.content}>
									<Text style = {styles.contentText}>
									- Không ổn định
									</Text>
									
								</View>
							</View>
							<View style = {styles.group}>
								<View style = {styles.tittle}>
									<Text style = {styles.tittleText} onPress = {() =>{
                		this.setState({currentImg: require('../../img/heapSort.png')})
                		}} >Code C++ / </Text> 
									<Text style = {styles.tittleText} onPress = {() =>{
                		this.setState({currentImg: require('../../img/heapjava.png')})
                		}} >Java</Text>
								</View>
								<View style = {styles.content}>
									<View style = {styles.codeArena}>
										<Image source = {this.state.currentImg}
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
    borderBottomColor: '#718093',
		flexDirection: 'row'
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
		// width: "100%"
  },
  image:{
		width: 378,
  }
});   