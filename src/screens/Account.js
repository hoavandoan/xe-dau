import React from 'react';
import {View, Text, Button} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationNativeContainer,} from "@react-navigation/native";

const Account = createStackNavigator()

const AccountScreen = () => {
    return (
        <View>
            <Text>Account</Text>
        </View>
    )
}
const AccountStackScreen = () => {
    return (
        <NavigationNativeContainer>
            <Account.Navigator>
                <Account.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{
                        headerTitle: 'Account',
                        headerTintColor: 'black',
                        headerStyle: {
                            backgroundColor:'#ffc107'
                        }

                    }}
                />
            </Account.Navigator>
        </NavigationNativeContainer>
    );
};

export default AccountStackScreen;
