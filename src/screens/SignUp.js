import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesome,Feather, MaterialIcons, AntDesign} from "@expo/vector-icons";
import {FAB} from 'react-native-paper';
import {colors, Style} from '../configs/theme';
import {SocialIcon} from 'react-native-elements';
import KeyboardShift from "../components/KeyboardShift";

const SignUp = ({navigation}) => {
    const [isLockEye, setIsLockEye] = useState(false);
    return (
        <KeyboardShift>
            {()=>(
                <View style={styles.container}>
                    <SafeAreaView>
                        <View>
                            <View>
                                <Text style={styles.title}>Đăng ký</Text>
                            </View>
                            <View style={styles.email}>
                                <AntDesign name='user' size={20} color={colors.text_gray}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Tài khoản"
                                />
                            </View>
                            <View style={styles.email}>
                                <AntDesign name='mail' size={20} color={colors.text_gray}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                />
                            </View>
                            <View style={styles.email}>
                                <AntDesign name='lock' size={20} color={colors.text_gray}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Mật khẩu"
                                    secureTextEntry={!isLockEye && true}
                                />
                                <TouchableOpacity onPress={() => setIsLockEye(!isLockEye)}>
                                    <Feather name={isLockEye ? 'eye-off' : 'eye'} size={20} color={colors.text_gray}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.email}>
                                <AntDesign name='lock' size={20} color={colors.text_gray}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Xác nhận lại mật khẩu"
                                    secureTextEntry={!isLockEye && true}
                                />
                                <TouchableOpacity onPress={() => setIsLockEye(!isLockEye)}>
                                    <Feather name={isLockEye ? 'eye-off' : 'eye'} size={20} color={colors.text_gray}/>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => console.log('login')} style={styles.button}>
                                <Text style={{color: colors.white, fontSize: 14}}>Đăng ký</Text>
                                <MaterialIcons name="navigate-next" size={20} style={{position: 'absolute', right: 10, opacity: 0.6, color: 'white'}}/>
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text>Bạn đã có tài khoản?</Text>
                                <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
                                    <Text style={{color: '#9181D9', marginLeft: 10}}>Đăng nhập</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            )}
        </KeyboardShift>

    );
};

export default SignUp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        margin: 'auto',
    },
    title: {
        fontWeight: '400',
        fontSize: 21,
        // marginTop: 150,
        marginBottom: 10,
    },
    email: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.text_gray,
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#424242',
        marginLeft: 12,
    },
    forgetPassword: {
        fontSize: 14,
        color: '#9181D9',
        textAlign: 'right',
        marginTop: 14,
        marginBottom: 30,
    },
    button: {
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: '#A290F1',
        height: 50,
        marginBottom: 26,
        marginTop: 26,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.16,
        shadowColor: '#000000',
        elevation: 4,
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 16,
        shadowOffset: {width: 1, height: 3},
        shadowRadius: 26,
        shadowOpacity: 0.2,
        shadowColor: '#707070',
        elevation: 3,
    },
});
