import React, {useState} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import Navigation from "./src/components/Navigation";

export default function App() {
    return (
            <View style={{flex: 1}}>
                <Navigation/>
            </View>

    );
}
