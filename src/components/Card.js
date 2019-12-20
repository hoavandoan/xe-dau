import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Surface} from "react-native-paper";

const Cards = ({children}) => {
    return (
        <View>
            <View style={styles.surface}>
                {children}
            </View>
        </View>

    );
};

export default Cards;
const styles = StyleSheet.create({
    surface: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        margin: 15,
        padding: 15,
        marginBottom: 0,
        flex: 1,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        backgroundColor: '#fff',
        shadowOpacity: 0.1,
    },
});
