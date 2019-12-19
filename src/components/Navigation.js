import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Search from "../screens/Search";
import Home from "../screens/Home";
import {LinearGradient} from "expo-linear-gradient";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions:{
            }

        },
        Search:  Search
    },
    {
        initialRouteName: 'Home',
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#3BAD87'},
    }
)
export default createAppContainer(TabNavigator)
