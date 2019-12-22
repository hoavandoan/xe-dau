import React from 'react';
import {View, Text} from "react-native";
import {
    createStackNavigator
} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MailBox = () => {
    return (
        <View>
            <Text>Mail Box</Text>
        </View>
    );
};

MailBox.navigationOptions = {
    headerStyle: {
        backgroundColor: '#226557',
    },
    tabBarLabel: 'Settings!',
}
let Mail = createStackNavigator({MailBox});
export default createAppContainer(Mail);