import React from 'react';
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    Button,
    TouchableOpacity
} from "react-native";
import {grey200, grey600} from "react-native-material-ui/src/styles/colors";
import {Feather} from "@expo/vector-icons";
import Card from './Card'
import {colors, Constants} from "../configs/theme";
import Modal from "react-native-modal"
import CarDetail from "../screens/CarDetail";
import { Modalize } from 'react-native-modalize';

const ListCar = ({navigation}) => {
    const modalRef = React.useRef(null)
    const [isVisible, setVisible] = React.useState(false)
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
    React.useEffect(()=>{
        const spreadsheetId = '1dWcQSzmeFpVPNno01WXovj6072xW0JbRQzg0IVjYFbQ'
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!E4:G5?key=AIzaSyA-UXoZqJhkIXOK0RaGOQXAubeX1QXAUSM`
        fetch(url,{
            method: "GET",
            headers: {
                "X-Auth-Token": "AIzaSyA-UXoZqJhkIXOK0RaGOQXAubeX1QXAUSM"
            }
        }).then(response=> response.json()).then(jsonData=>{
            console.log('datasss', jsonData)
        })
    },[])
    // const renderItem = ({item, index}) => {
    //     return (
    //         <View key={index}>
    //             <View style={styles.card}>
    //                 <View style={styles.cardImage}>
    //                     <Image
    //                         style={styles.image}
    //                         source={{uri: item.image}}
    //                     />
    //                 </View>
    //                 <View style={[styles.infoCar, {flex: 1}]}>
    //                     <View style={styles.cardHeader}>
    //                         <View style={styles.cardTitle}>
    //                             <Text>{item.carOwner}</Text>
    //                             <Text>{item.category}</Text>
    //                         </View>
    //                         <Text style={styles.cardSubTitle}>{item.address}</Text>
    //                     </View>
    //                     <View style={{flex: 3, marginLeft: 15, backgroundColor: grey50}}>
    //                         <Text>Nga Son di: {item.timeStart}</Text>
    //                         <Text>Ha Noi ve: {item.timeEnd}</Text>
    //                     </View>
    //                     <View style={styles.phone}>
    //                         <Feather name="phone-call" size={16} color="black"/>
    //                         <Text onPress={() => callPhone(item.phone)}> {item.phone}</Text>
    //                     </View>
    //                 </View>
    //             </View>
    //
    //         </View>
    //     )
    // }
    const callPhone = (phone) => {
        Linking.openURL(`tel:${phone}`)
    }
    const onOpen = () => {
        const modal = modalRef.current;

        if (modal) {
            modal.open();
        }
    };
    const close = ()=>{
        const modal = modalRef.current;
        if (modal) {
            modal.close();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.backgroundList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.categories}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontWeight: 'bold', marginBottom: 12}}>Xe Khách</Text>
                            <Text>Tat ca</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.card}>
                                <View style={styles.cardImage}>
                                    <TouchableHighlight style={{width: '100%', height: '100%'}}
                                                        onPress={onOpen}>
                                        <Image
                                            style={styles.image}
                                            source={{uri: 'https://static.vexere.com/c/i/16211/xe-tien-tien-VeXeRe-jOA57FL-1000x600.jpeg'}}
                                        />
                                    </TouchableHighlight>
                                </View>
                                <View style={[styles.infoCar, {flex: 1}]}>
                                    <View style={styles.cardHeader}>
                                        <View style={styles.cardTitle}>
                                            <Text style={{fontWeight: 'bold'}}>Long Hải</Text>
                                            <Text style={{fontSize: 11}}>100.000d</Text>
                                        </View>
                                        <Text style={styles.cardSubTitle}>Nga Sơn, Thanh Hóa</Text>
                                    </View>
                                    <View style={{flex: 3.5, fontSize: 10}}>
                                        <View style={{
                                            marginTop: 5,
                                            marginBottom: 5,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                            <Text style={{fontSize: 13}}>Nga Sơn</Text>
                                            <Text style={{fontSize: 13}}>Ha Nội</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                                            <View>
                                                <Text style={{fontSize: 11}}>11h:30</Text>
                                            </View>
                                            <View>
                                                <Text style={{fontSize: 11}}>{'------->'} </Text>
                                            </View>
                                            <View>
                                                <Text style={{fontSize: 11}}>14h:30</Text>
                                            </View>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                                            <View>
                                                <Text style={{fontSize: 11}}>9h</Text>
                                            </View>
                                            <View>
                                                <Text style={{fontSize: 11}}>{'<-------'}</Text>
                                            </View>
                                            <View>
                                                <Text style={{fontSize: 11}}>6h</Text>
                                            </View>
                                        </View>


                                    </View>
                                    <View style={styles.phone}>
                                        <Feather name="phone-call" size={12} color="black"/>
                                        <Text style={{fontSize: 12}}
                                              onPress={() => callPhone('0901764393')}> 0901764393</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.card}>
                            </View>
                            <View style={styles.card}>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.categories}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontWeight: 'bold', marginBottom: 12}}>Xe Hợp đồng</Text>
                            <Text>Tat ca</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.card}>
                            </View>
                            <View style={styles.card}>
                            </View>
                            <View style={styles.card}>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.categories}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontWeight: 'bold', marginBottom: 12}}>Xe Taxi</Text>
                            <Text>Tat ca</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.card}>
                            </View>
                            <View style={styles.card}>
                            </View>
                            <View style={styles.card}>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.categories}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontWeight: 'bold', marginBottom: 12}}>Xe ghép</Text>
                            <Text>Tat ca</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.card}>
                            </View>
                            <View style={styles.card}>
                            </View>
                            <View style={styles.card}>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            <Modalize
                ref={modalRef}
                adjustToContentHeight
                modalStyle={styles.modal}
                // modalHeight={350}
                handleStyle={styles.handle}
                handlePosition="inside"
                // openAnimationConfig={{
                //     timing: { duration: 400 },
                //     spring: { speed: 100, bounciness: 10 },
                // }}
                // closeAnimationConfig={{
                //     timing: { duration: 400 },
                //     spring: { speed: 100, bounciness: 10 },
                // }}
            >
                <CarDetail closeModal={close}/>
            </Modalize>
        </View>
    );
};

export default ListCar
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.home,
        elevation: 0
    },
    card: {
        height: 150,
        width: 250,
        backgroundColor: colors.white,
        borderRadius: Constants.borderRadius,
        flexDirection: 'row',
        marginRight: 16
    },
    cardHeader: {
        flex: 1.5,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    cardSubTitle: {
        fontSize: 11,
        color: grey600
    },
    cardImage: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '90%',
        resizeMode: 'stretch',
        borderRadius: 15
    },
    infoCar: {
        width: '60%',
        height: '100%',
        padding: 5
    },
    phone: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    backgroundList: {
        width: '100%',
        height: '100%',
        backgroundColor: grey200,
        borderTopStartRadius: Constants.borderRadius,
        borderTopEndRadius: Constants.borderRadius,
        padding: Constants.pad,
        paddingTop: 0
    },
    categories: {
        marginBottom: 35
    },
    modal: {
        backgroundColor: '#cac9dd',
        shadowOpacity: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    handle: {
        width: 150,
        backgroundColor: '#b0afbc'
    },
});
