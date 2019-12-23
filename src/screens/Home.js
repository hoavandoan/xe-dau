import React,{useEffect} from 'react';
import {TouchableOpacity,View, Text} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import SearchScreen from "./Search";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationNativeContainer,} from "@react-navigation/native";
import ListCar from "../components/ListCar";
import {Constants, Style} from "../configs/theme";
import CarDetail from "./CarDetail";

const Tab = createStackNavigator()
const MainStack = createStackNavigator();

function MainStackScreen({navigation}) {
    return (
        <MainStack.Navigator mode="modal">
            <MainStack.Screen name="Home"
                              component={ListCar}
                              options={({navigation}) => ({
                                  headerStyle: {
                                      backgroundColor: '#2196f3',
                                      ...Style.disableShadow
                                  },
                                  headerTintColor: '#fff',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                                  headerRightContainerStyle: {
                                      paddingRight: Constants.pad
                                  },
                                  headerRight: () => (
                                      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                          <Ionicons name="ios-search" size={25} color="white"/>
                                      </TouchableOpacity>
                                  ),
                              })}
            />
            <MainStack.Screen
                name="Details"
                component={CarDetail}
                options={({navigation})=>({
                    // headerLeft:<Ionicons name="ios-search" size={25} color="white"/>
                    title: 'Thông tin nhà xe',
                    headerLeft: ()=>(
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="md-close" size={25} color="black"/>
                        </TouchableOpacity>
                    ),
                    headerLeftContainerStyle: {
                        paddingLeft: Constants.pad
                    },
                    headerStyle:{
                        ...Style.disableShadow
                    }
                })}

            />
        </MainStack.Navigator>
    );
}



function HomeStackScreen() {
    return (
        <NavigationNativeContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={MainStackScreen}
                    options={{
                        headerShown: false,
                    }}
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

