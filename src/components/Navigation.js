import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Home from "../screens/Home";
import {FontAwesome,Feather, MaterialIcons} from "@expo/vector-icons";
import MailBox from "../screens/MailBox";
import Account from "../screens/Account";
import MapView from "../screens/MapView";

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Trang chủ',
                tabBarIcon: ({tintColor}) => (
                    <FontAwesome name="home" color={tintColor} size={20}/>
                ),
                activeColor: '#2196f3',
            },
        },
        Map: {
            screen: MapView,
            navigationOptions: {
                title: 'Vị trí',
                tabBarIcon: ({tintColor}) => (
                    <Feather name="map-pin" color={tintColor} size={20}/>
                ),
                activeColor: '#3f51b5',
            },
        },
        MailBox: {
            screen: MailBox,
            navigationOptions: {
                title: 'Hộp thư',
                tabBarIcon: ({tintColor}) => (
                    <Feather name="mail" color={tintColor} size={20}/>
                )
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                title: 'Tài khoản',
                tabBarIcon: ({tintColor}) => (
                    <MaterialIcons name="account-circle" color={tintColor} size={20}/>
                ),
                activeColor: '#ffc107',
            }
        },
    },
    {
        initialRouteName: 'Home',
        activeColor: '#226557',
        inactiveColor: '#aaaaaa',
        barStyle: {backgroundColor: '#FFFFFF'},
    }
)
export default createAppContainer(TabNavigator)
