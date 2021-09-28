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
export default class InsertionSort extends Component {
	constructor(props){
		super(props);
    this.state = {
      currentImg: require('../../img/insertSort.png'),
    
    }
	}
    render() {
        return (
						<ScrollView>
							<View style = {styles.container}>
								<Text style = {{textAlign:'center',fontSize:30,fontWeight:'bold'}}>Thuật toán sắp xếp chèn (Insertion Sort)</Text>
								<View style = {styles.group}>
									<View style = {styles.tittle}>
										<Text style = {styles.tittleText}>Ý tưởng</Text>
									</View>
									<View style = {styles.content}>
										<Text style = {styles.contentText}>
										- Ý tưởng chính của thuật toán là ta sẽ sắp xếp lần lượt từng đoạn gồm 1 phần tử đầu tiên, 2 phần tử đầu tiên, …, N phần tử.
										</Text>
										<Text style = {styles.contentText}>
										- Giả sử ta đã sắp xếp xong i phần tử của mảng. Để sắp xếp i+1 phần tử đầu tiên, ta tìm vị trí phù hợp của phần tử thứ i+1 và "chèn" nó vào đó.
										</Text>
									</View>
								</View>
								<View style = {styles.group}>
									<View style = {styles.tittle}>
										<Text style = {styles.tittleText}>Ưu điểm của thuật toán</Text>
									</View>
									<View style = {styles.content}>
										<Text style = {styles.contentText}>
										- Nếu danh sách đã gần đúng thứ tự, Insertion Sort sẽ chạy rất nhanh. Ví dụ bạn cần sắp xếp Highscore trong game.
										</Text>
										
									</View>
								</View>
								<View style = {styles.group}>
									<View style = {styles.tittle}>
										<Text style = {styles.tittleText}>Nhược điểm của thuật toán</Text>
									</View>
									<View style = {styles.content}>
										<Text style = {styles.contentText}>
										- Độ phức tạp O(N^2), không đủ nhanh với dữ liệu lớn.
										</Text>
										
									</View>
								</View>
								<View style = {styles.group}>
									<View style = {styles.tittle}>
										<Text style = {styles.tittleText} onPress = {() =>{
                			this.setState({currentImg: require('../../img/insertSort.png')})
                		}} >Code C++ / </Text>
										<Text style = {styles.tittleText} onPress = {() =>{
                			this.setState({currentImg: require('../../img/insertJava.png')})
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
  },
  image:{
    width: 378,
 
  }
});   