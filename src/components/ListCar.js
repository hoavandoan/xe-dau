import React from 'react';
import {Image, Linking, StyleSheet, Text, View} from "react-native";
import {grey100, grey200, grey50, grey600} from "react-native-material-ui/src/styles/colors";
import {Feather} from "@expo/vector-icons";
import {FlatList} from "react-navigation";
import Card from './Card'

const ListCar = () => {
    const [data] = React.useState([
        {
            carOwner: 'Long Hải',
            phone: '0901321325',
            address: 'Nga bach, Nga Son',
            timeStart: '11h:30',
            timeEnd: '6h',
            image: 'https://static.vexere.com/c/i/16211/xe-tien-tien-VeXeRe-jOA57FL-1000x600.jpeg',
            category: 'Xe Khách'
        },
        {
            carOwner: 'Dậu',
            phone: '0901321325',
            address: 'Nga Thach, Nga Son',
            timeStart: '11h:30',
            timeEnd: '6h',
            image: 'https://limousinevn.vn/wp-content/uploads/2018/01/phuong-nguyen-limousine.jpg',
            category: 'Xe Dù'
        },
        {
            carOwner: 'Nham',
            phone: '0901321325',
            address: 'Thi Tran, Nga Son',
            timeStart: '6h',
            timeEnd: '13h:30',
            image: 'http://xedulich.danang.vn/public/thue-xe-du-lich-24-cho-da-nang/dich-vu-thue-xe-du-lich-24-cho-gia-re-tai-da-nang.jpg',
            category: 'Xe Taxi'
        },
        {
            carOwner: 'Tien Tien',
            phone: '0901321325',
            address: 'Nga Yen, Nga Son',
            timeStart: '6h',
            timeEnd: '13h:30',
            image: 'https://static.vexere.com/c/i/16211/xe-tien-tien-VeXeRe-jOA57FL-1000x600.jpeg'
        },
        {
            carOwner: 'Tien Tien',
            phone: '0901321325',
            address: 'Nga Yen, Nga Son',
            timeStart: 1576750888721,
            timeEnd: 1576750888721,
            image: 'https://static.vexere.com/c/i/16211/xe-tien-tien-VeXeRe-jOA57FL-1000x600.jpeg',
            category: 'Xe Khach'
        }
    ])

    const renderItem = ({item, index}) => {
        return (
            <Card key={index}>

                <View style={styles.card}>
                    <View style={styles.cardImage}>
                        <Image
                            style={{width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 15}}
                            source={{uri: item.image}}
                        />
                    </View>
                    <View style={[styles.infoCar, {flex: 1}]}>
                        <View style={styles.cardHeader}>
                            <View style={styles.cardTitle}>
                                <Text>{item.carOwner}</Text>
                                <Text>{item.category}</Text>
                            </View>
                            <Text style={styles.cardSubTitle}>{item.address}</Text>
                        </View>
                        <View style={{flex: 3, marginLeft: 15, backgroundColor: grey50}}>
                            <Text>Nga Son di: {item.timeStart}</Text>
                            <Text>Ha Noi ve: {item.timeEnd}</Text>
                        </View>
                        <View style={styles.phone}>
                            <Feather name="phone-call" size={16} color="black"/>
                            <Text onPress={() => callPhone(item.phone)}> {item.phone}</Text>
                        </View>
                    </View>
                </View>

            </Card>
        )
    }
    const callPhone = (phone) => {
        Linking.openURL(`tel:${phone}`)
    }
    return (
        <View style={styles.container}>

            <View style={{width: '100%', height: '100%', backgroundColor: grey200, borderTopStartRadius: 15, borderTopEndRadius: 15}}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

export default ListCar;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2196f3',
    },
    card: {
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row'
    },
    cardHeader: {
        flex: 2,
        marginLeft: 15
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    cardSubTitle: {
        fontSize: 14,
        color: grey600
    },
    cardImage: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoCar: {
        width: '65%',
        height: '100%',
    },
    phone: {
        flex: 1,
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

});
