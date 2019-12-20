import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import SearchScreen from "./Search";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationNativeContainer,} from "@react-navigation/native";
import ListCar from "../components/ListCar";

const Tab = createStackNavigator()

function HomeStackScreen() {
    return (
        <NavigationNativeContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={ListCar}
                    options={({navigation, route}) => ({
                        headerStyle: {
                            backgroundColor: '#2196f3',
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRightContainerStyle: {
                            paddingRight: 15
                        },
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                <Ionicons name="ios-search" size={25} color="white"/>
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                />
            </Tab.Navigator>
        </NavigationNativeContainer>
    )
}

export default HomeStackScreen

