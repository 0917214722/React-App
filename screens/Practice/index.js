import React, { useEffect, useState } from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Button,
  Image,
  Linking
} from 'react-native';
import Modal from 'react-native-modal';


const ExpandableComponent = ({ item, onClickFunction }) => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}
      >
      <Text style={styles.headerText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View style={{ height: layoutHeight, overflow: 'visible'}}>
        {item.subcategory.map((item, key) => (
          <TouchableOpacity key={key} style={styles.content} onPress={toggleModal} >
            <Text style={styles.text}>
              {item.id}. {item.namep}
            </Text>
            <Modal isVisible={isModalVisible} style={styles.text}>
            <Image source = {require('../../img/lorem2.png') }  />
              <View style = {styles.buttonwrap}>
                <TouchableOpacity style={styles.button} onPress={toggleModal}>
                  <Text> Đóng </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={({ }) => Linking.openURL(item.link)}>
                  <Text> Đọc full đề và nộp bài </Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Practice = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(true);


  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] =
            !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text style={styles.titleText}>Problemset</Text>
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Practice;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#81d4fa'
  },
  header: {
    backgroundColor: '#00e676',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#e0f2f1',
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
  },
  buttonwrap: {
    flexDirection: 'row',
    marginTop: 30
  }
});

const data = require('../../constants/problems.json')
const CONTENT = data.CONTENT;