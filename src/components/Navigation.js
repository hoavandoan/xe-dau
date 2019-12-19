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

        },
        Search:  Search
    },
    {
        initialRouteName: 'Home',
    }
)
export default createAppContainer(TabNavigator)
Home.navigationOptions = ({navigation}) => ({
    headerTintColor: 'rgba(255,255,255,0.8)',
    headerTitle: 'Nhà xe',
    headerBackground: (
        <LinearGradient
            colors={['#4cbdd7', '#3378C3']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={{flex: 1}}
        />
    ),
    headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Ionicons name="ios-search" size={25} color="white"/>
        </TouchableOpacity>
    ),
    headerRightContainerStyle: {
        paddingRight: 10
    },
})
