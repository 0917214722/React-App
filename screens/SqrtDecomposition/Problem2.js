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
export default class Problem1 extends Component {
  render() {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {{textAlign:'center',fontSize:30,fontWeight:'bold'}}>Bài toán số 2</Text>
          <View style = {styles.group}>
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Đề bài</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Cho một mảng A gồm N phần tử là các số nguyên không âm. Bạn cần trả lời Q truy vấn, mỗi truy vấn có dạng (l,r,k) yêu cầu tìm đếm số phần tử của A nằm trong đoạn [l..r] có giá trị bằng k. Giới hạn: N,Q,Ai≤10^5.
              </Text>
            </View>
          </View>
          <View style = {styles.group}>
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Cách giải</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Giả sử ta luôn có l=1 và r=N, bài toán trên có thể giải đơn giản bằng cách tạo một mảng cnt[x]= số phần tử của mảng có giá trị bằng x.
              </Text>
              <Text style = {styles.contentText}>
               - Ta áp dụng ý tưởng này để giải bài toán tổng quát, bằng cách tạo ra sqrt(N) mảng cnt, mỗi mảng quản lý một đoạn sqrt(N) phần tử liên tiếp của A. Để hiểu rõ hơn, ta có thể xem ví dụ sau.
              </Text>
              <Text style = {styles.contentText}>
               - Ta có mảng A gốm 13 phần tử, chỉ số được đánh bắt đầu từ 0. Ta sẽ chia mảng A thành các đoạn có độ dài 4, đoạn cuối cùng sẽ chỉ chứa 1 phần tử. Nội dung mảng A và các mảng cnt đã được tính sẵn như trong hình sau:
              </Text>
              <Image source = {require('../../img/probSqrt1.png')} style = {styles.contentImg}/>
              <Text style = {styles.contentText}>
               - Với cấu trúc trên, ta có thể dễ dàng trả lời các truy vấn. Ví dụ, xét truy vấn (1,11,0).
              </Text>
              <Image source = {require('../../img/probSqrt2.png')} style = {styles.contentImg}/>
              <Text style = {styles.contentText}>
               - Có thể thấy, đoạn truy vấn sẽ luôn được chia thành các đoạn chứa đủ sqrt(N) phần tử (trong trường hợp này là đoạn [4..7] và [8..11]), và có thể thêm một số đoạn không đầy đủ ở hai đầu (ở đây là đoạn [1..3]).
              </Text>
              <Text style = {styles.contentText}>
               - Với những đoạn đầy đủ, ta cộng cnt[0] của chúng vào kết quả. Với những đoạn không đầy đủ, ta xét từng phần tử. Phần tử nào bằng 0, ta sẽ tăng biến đếm kết quả lên 1. Với truy vấn (1,11,0), ta có kết quả là 2+3+1+1=7.
              </Text>
              <Image source = {require('../../img/probSqrt3.png')} style = {styles.contentImg}/>
              <Text style = {styles.contentText}>
               - Cấu trúc trên vẫn có thể giải bài toán này khi có thêm truy vấn chỉnh sửa một phần tử của A, bạn chỉ cần thay đổi giá trị cnt của một đoạn duy nhất chứa phần tử cần cập nhật.
              </Text>
            </View>
          </View>
          <View style = {styles.group}>
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Phân tích</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Đầu tiên, ta phải trả lời được câu hỏi: tại sao lại chia thành sqrt(N) đoạn, mà không phải 1,2,10,N/2,… ?
              </Text>
              <Text style = {styles.contentText}>
               - Gọi số đoạn ta chia ra là S. Vậy mỗi đoạn sẽ có độ dài N/S (ta tạm bỏ qua đoạn cuối).
              </Text>
              <Text style = {styles.contentText}>
               - Khi truy vấn, ta phải xét 2 thứ: một là những đoạn đầy đủ, nằm trong đoạn truy vấn. Hai là đoạn dư ra ở hai đầu của truy vấn.
              </Text>
              <Text style = {styles.contentText}>
               - Với những đoạn đầy đủ, trong trường hợp tệ nhất chúng ta phải xét cả S đoạn. Mỗi đoạn ta cộng cnt[k] vào kết quả trong O(1), vậy tổng cộng mất O(S).
              </Text>
              <Text style = {styles.contentText}>
               - Với đoạn dư ra ở hai đầu, ta xét riêng từng phần tử mất O(1). Các đoạn đều có độ dài N/S, nên ta mất O(N/S) cho phần này.
              </Text>
              <Text style = {styles.contentText}>
               - Mỗi truy vấn ta mất thời gian là O(S+N/S). Ta cần tìm giá trị S sao cho S+N/S đạt giá trị nhỏ nhất. Áp dụng bất đẳng thức AM-GM, giá trị này là nhỏ nhất khi S=N/S⟺S=N−−√. Thời gian để thực hiện Q truy vấn sẽ là O(QN−−√).
              </Text>
              
            </View>
          </View>
          <View style = {styles.group}> 
            <View style = {styles.tittle}>
              <Text style = {styles.tittleText}>Cài đặt</Text>
            </View>
            <View style = {styles.content}>
              <Text style = {styles.contentText}>
               - Ta cần phải lưu những cấu trúc sau: {"\n"}
                <Text>
                  {"\t"}+ √N  mảng cnt, mỗi mảng có độ dài max(Ai), tốn O(√N∗max(Ai)) bộ nhớ. O(1).{"\n"}
                </Text>
                <Text>
                  {"\t"}+ Mảng A, tốn O(N) bộ nhớ.
                </Text>
              </Text>
              <Text style = {styles.contentText}>
               - Khi giải bài toán, ta thường chia thành các hàm tiền xử lý để dựng ra cấu trúc dữ liệu, và các hàm trả lời các truy vấn.
              </Text>
              <Image source = {require('../../img/probSqrt4.png')} style = {styles.contentImg}/>
              <Text style = {styles.contentText}>
               - Sau khi đã tiền xử lý, hàm trả lời truy vấn có thể cài đặt như sau. Lưu ý, ta phải xét riêng trường hợp cả hai đầu của truy vấn nằm trong cùng một đoạn. Trong code bên dưới, tác giả dùng hàm count của thư viện C++ STL.
              </Text>
              <Image source = {require('../../img/probSqrt5.png')} style = {styles.contentImg} style ={{height:300}}/>
              <Text style = {styles.contentText}>
               - Thao tác cập nhật một phần tử có thể thêm vào như sau (với u là vị trí cần cập nhật, và v là giá trị mới):
              </Text>
              <Image source = {require('../../img/probSqrt6.png')} style = {styles.contentImg}/>
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