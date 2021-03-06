import React from 'react';
import {View, Text} from "react-native";
import {
    createStackNavigator
} from 'react-navigation-stack';
import {createAppContainer , SafeAreaView} from 'react-navigation';
import {colors} from "../configs/theme";

const MailBox = () => {
    return (
        <View style={{flex: 1}}>
            <Text>Mail Box</Text>
        </View>
    );
};

MailBox.navigationOptions = {
    headerStyle: {
        backgroundColor: colors.mail,
    },
    tabBarLabel: 'Settings!',
}
let Mail = createStackNavigator({MailBox});
export default createAppContainer(Mail);
