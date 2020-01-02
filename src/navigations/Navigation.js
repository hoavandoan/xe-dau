import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Home from "../screens/Home";
import {FontAwesome,Feather, MaterialIcons} from "@expo/vector-icons";
import MailBox from "../screens/MailBox";
import Account from "../screens/Account";
import MapView from "../screens/MapView";
import {colors} from "../configs/theme";
import Favorite from "../screens/Favorite";

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Trang chủ',
                tabBarIcon: ({tintColor}) => (
                    <FontAwesome name="home" color={tintColor} size={20}/>
                ),
                activeColor: colors.home,
            },
        },
        Favorite: {
            screen: Favorite,
            navigationOptions: {
                title: 'Yêu thích',
                tabBarIcon: ({tintColor}) => (
                    <Feather name="map-pin" color={tintColor} size={20}/>
                ),
                activeColor: colors.favorite,
            },
        },
        MailBox: {
            screen: MailBox,
            navigationOptions: {
                title: 'Hộp thư',
                tabBarIcon: ({tintColor}) => (
                    <Feather name="mail" color={tintColor} size={20}/>
                ),
                activeColor: colors.mail
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                title: 'Tài khoản',
                tabBarIcon: ({tintColor}) => (
                    <MaterialIcons name="account-circle" color={tintColor} size={20}/>
                ),
                activeColor: colors.account,
            }
        },
    },
    {
        initialRouteName: 'Home',
        inactiveColor: colors.disable,
        barStyle: {backgroundColor: colors.white},
    }
)
export default createAppContainer(TabNavigator)
