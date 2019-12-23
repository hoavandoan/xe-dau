import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Surface} from "react-native-paper";
import {colors, Constants, Style} from "../configs/theme";

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
        borderRadius: Constants.borderRadius,
        backgroundColor: colors.white,
        shadowOpacity: 0.1,
        height: 150,
        ...Style.shadow
    },
});
