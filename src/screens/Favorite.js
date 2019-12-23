import React from 'react';
import {View,Text} from "react-native";
import {
    createStackNavigator
} from 'react-navigation-stack';
import {createAppContainer , SafeAreaView} from 'react-navigation';
import {colors} from "../configs/theme";

const Favorite = () => {
    return (
        <View>
            <Text>Favorite</Text>
        </View>
    );
};

Favorite.navigationOptions = {
    headerStyle: {
        backgroundColor: colors.favorite,
    },
    tabBarLabel: 'Settings!',
}
let Farv = createStackNavigator({Favorite});
export default createAppContainer(Farv);
