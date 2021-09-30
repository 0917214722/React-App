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
  ActionSheetIOS
} from 'react-native';
export default class linkList extends Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <ScrollView>
        <View style= {styles.container}>
          <View style = {styles.header}>
           <Text style = {{fontSize:30,fontWeight:'bold'}}>Danh sách liên kết </Text>
           <Text style = {{fontSize:13}}>Độ khó: Dễ</Text>
           <Text style = {{fontSize:13}}>Cập nhật lần cuối: 30/9/2020</Text>
          </View>
          <View style = {styles.content}>
            <Text style = {styles.contentText}>- Danh sách liên kết là một cấu trúc dữ liệu có thể giữ một số lượng phần tử tùy ý và dễ dàng thay đổi kích thước, cũng như dễ dàng bỏ đi các phần tử bên trong nó.</Text>
            <Text style = {styles.contentText}>- Danh sách liên kết, hiểu theo cách đơn giản nhất là một con trỏ trỏ tới một nút dữ liệu. Mỗi nút dữ liệu bao gồm dữ liệu cần chứa và một con trỏ trỏ tới nút tiếp theo. Tại điểm cuối cùng, con trỏ trỏ tới giá trị NULL.</Text>
            <Image source = {require('../../img/linked_list.png')} style = {{width:"100%"}} />
            <Text style = {styles.contentText}>- Với thiết kế như ban đầu, một danh sách liên kết thích hợp để lưu trữ dữ liệu khi chưa biết trước được số lượng các phần tử hoặc các phần tử thường xuyên thay đổi. Tuy vậy, chúng ta không thể truy cập một cách ngẫu nhiên các phần tử của danh sách liên kết. Để tìm kiếm một giá trị, ta phải bắt đầu tại phần tử đầu tiên và duyệt tuần tự qua các phần tử cho tới khi bắt gặp được giá trị mà mình cần tìm kiếm. Để chèn một nút vào danh sách liên kết, bạn cũng phải thực hiện tương tự. Độ phức tạp của cả 2 thao tác này là O(N). Tuy nhiên, nếu ta biết được con trỏ trỏ đến phần tử cần xóa, thì độ phức tạp chỉ là O(1). Dễ dàng nhận thấy, thao tác tìm kiếm và chèn trong danh sách liên kết không thật sự hiệu quả.</Text>
            <Text style = {styles.contentText}>- Sau đây là cài đặt kiểu dữ liệu danh sách liên kết thông thường:</Text>
            <Image source = {require('../../img/ll1.png')}/>
            <Text style = {styles.contentText}>- Bạn có thể chèn một nút mới vào bằng cách chèn chúng vào đầu danh sách. Thao tác này có độ phức tạp là O(1).</Text>
            <Image source = {require('../../img/ll2.png')}/>
            <Text style = {styles.contentText}>- Duyệt qua toàn bộ danh sách liên kết rất đơn giản như sau:</Text>
            <Image source = {require('../../img/ll3.png')}/>
            <Text style = {styles.contentText}>- Ngoài ra, ta cũng có thể lưu thêm con trỏ trỏ vào phần tử cuối của danh sách. Khi đó độ phức tạp để thêm 1 phần tử vào cuối danh sách là O(1).</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdde1'
  },
  header: {
    marginLeft: 15,
  },
  content:{
    marginLeft: 15,
    marginRight: 5,
    fontSize: 20
  },
  contentText:{
    fontSize: 20
  }
})