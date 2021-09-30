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

export default class Arr extends Component {
  render() {
    return (
      <ScrollView>
        <View style = {styles.container}>
        <Text style = {{textAlign:'center',fontSize:30,fontWeight:'bold'}}>Mảng và danh sách liên kết</Text>
          <View style = {styles.group}> 
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Mảng (Arrays)</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Mảng là một cấu trúc dữ liệu cực kỳ đơn giản và có thể xem như một danh sách với chiều dài cố định. Mảng là một cấu trúc dữ liệu “đẹp” bởi tính đơn giản của nó. Mảng đặc biệt thích hợp cho các tình huống mà ta biết trước được số lượng phần tử hoặc có thể xác định được khi chạy chương trình.
              </Text>
              <Text style = {styles.contentText}>
               - Giả sử bạn cần một đoạn mã để tính giá trị trung bình của một vài con số. Mảng là sự lựa chọn tuyệt vời để giữ các giá trị bởi yêu cầu bài toán không đòi hỏi một thứ tự lưu trữ cụ thể và các phép tính toán cũng không đòi hỏi gì khác ngoài việc duyệt qua toàn bộ các phần tử.
              </Text>
              <Text style = {styles.contentText}>
               - Một trong những sức mạnh khác của mảng chính là ta có thể truy cập các phần tử của mảng một cách ngẫu nhiên bằng chỉ số. Ví dụ như, bạn có một danh sách gồm tên của các học sinh trong lớp học. Mỗi học sinh đánh số từ 1 đến n. Khi đó để đọc hoặc lưu tên học sinh thứ i bạn chỉ cần gọi tới studentName[i]. Do các phần tử của mảng ở vị trí liên tiếp nhau trong bộ nhớ máy tính, nên thao tác này chỉ mất độ phức tạp O(1). Tuy nhiên cũng vì lý do này, nên việc tăng kích thước mảng hay thêm / xóa 1 phần tử vào vị trí bất kỳ của mảng có độ phức tạp O(N).
              </Text>
              <Text style = {styles.contentText}>
               - Mảng có số lượng phần tử cố định, mỗi phần tử giữ của mảng một thông tin và ở một vị trí không đổi đã được định nghĩa trước đó.
              </Text>
            </View>
          </View>
          <View style = {styles.group}> 
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Tổng kết</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Bộ nhớ cố định, cần biết trước số phần tử
              </Text>
              <Text style = {styles.contentText}>
               - Truy cập một vị trí bất kỳ: O(1).
              </Text>
              <Text style = {styles.contentText}>
               - Thêm / xóa một phần tử: O(N).
              </Text>
            </View>
          </View>
          <View style = {styles.group}> 
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Mở rộng</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Trong C++ STL, có CTDL vector, được gọi là mảng động. CTDL này cho phép thực hiện các thao tác: {"\n"}
                <Text>
                  {"\t"}+ Truy cập một vị trí bất kỳ: O(1).{"\n"}
                </Text>
                <Text>
                  {"\t"}+ Thêm / Xóa 1 phần tử vào cuối mảng: độ phức tạp trung bình: O(1).{"\n"}
                </Text>
                <Text>
                  {"\t"}+ Thêm / xóa một phần tử bất kỳ: O(N).
                </Text>
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
  // codeArena:{
  //   borderWidth: 1,
  // },
  // image:{
  //   width: 378,
 
  // }
});   