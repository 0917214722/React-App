import React, { Component } from 'react'
import Arr from './arr';
import linkList from './linkList';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
export default class ArrAndLinkList extends Component {
    constructor(props){
        super(props);
        this.navigation = props.navigation;
        this.state = {
            data: props.route.params 
        }
      }
    render() {
        return (
					<Tab.Navigator
						activeColor="#e1b12c"
						inactiveColor="#3e2465"
						barStyle={{ backgroundColor: '#487eb0' }}
					>
						<Tab.Screen name="Mảng" component={Arr}/>
						<Tab.Screen name="Danh sách liên kết" component={linkList} />
				</Tab.Navigator>
        )
    }
}
