import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import {Card, Surface} from "react-native-paper";
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Cards = ({children}) => {
    return (
        <View>
            <Surface style={styles.surface}>
                {children}
            </Surface>
        </View>

    );
};

export default Cards;
const styles = StyleSheet.create({
    surface: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        margin:15,
        padding: 10,
        marginBottom:0,
        flex: 1
    },
});
