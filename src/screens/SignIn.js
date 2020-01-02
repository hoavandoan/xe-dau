import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import * as Facebook from 'expo-facebook';
import Amplify, {Auth, Cache} from 'aws-amplify';
import KeyboardShift from "../components/KeyboardShift";
import {SocialIcon} from "react-native-elements";
import {AntDesign, Feather, MaterialIcons} from "@expo/vector-icons";
import {useStore} from "../store/useStore";
import {colors} from '../configs/theme';
import {getInfoUser} from "../common/checkUser";
import Expo from 'expo'

const SignIn = ({navigation}) => {
    const [isLockEye, setIsLockEye] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {state, dispatch} = useStore()

    async function signInFacebook() {
        try {
            await Facebook.initializeAsync('490376594797525');
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email'],
            });
            if (type === 'success') {
                //Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`);
                // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                const resJson = await response.json()
                const federatedInfo = await Cache.getItem('federatedInfo');
                dispatch({
                    type: 'login',
                    user: {
                        ...resJson,
                        id_aws: federatedInfo && federatedInfo.user.id || null,
                        provider: federatedInfo && federatedInfo.provider || null,
                        token
                    }
                })
                Auth.federatedSignIn('facebook', {token, expires_at: expires}, {name: resJson.id})
                    .then(credentials => {
                        Auth.currentAuthenticatedUser().then(user => console.log(user));
                    }).catch(e => {
                    console.log(e);
                });

            } else {
                // type === 'cancel'
                navigation.navigate('AuthLoading')
            }
        } catch ({message}) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <KeyboardShift>
            {() => (
                <View style={styles.container}>
                    <SafeAreaView>
                        <View>
                            <Text style={styles.title}>Đăng nhập</Text>
                        </View>
                        <View style={styles.email}>
                            <AntDesign name='mail' size={20} color={colors.text_gray}/>
                            <TextInput
                                style={styles.input}
                                name="username"
                                placeholder="Email"
                                value={username}
                                onChangeText={(value) => setUsername(value)}
                            />
                        </View>
                        <View style={styles.email}>
                            <AntDesign name='lock' size={20} color={colors.text_gray}/>
                            <TextInput
                                style={styles.input}
                                placeholder="Mật khẩu"
                                secureTextEntry={!isLockEye && true}
                                onChangeText={(value) => setPassword(value)}
                            />
                            <TouchableOpacity onPress={() => setIsLockEye(!isLockEye)}>
                                <Feather name={isLockEye ? 'eye-off' : 'eye'} size={20} color={colors.text_gray}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
                            <Text style={styles.forgetPassword}>
                                Quên mật khẩu?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSignIn()} style={styles.button}>
                            <Text style={{color: colors.white, fontSize: 14}}>
                                Đăng nhập
                            </Text>
                            <MaterialIcons
                                name="navigate-next"
                                size={20}
                                style={{position: 'absolute', right: 10, opacity: 0.6, color: 'white'}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{textAlign: 'center', color: '#9181D9'}}>
                                Bạn chưa có tài khoản?
                            </Text>
                        </TouchableOpacity>
                        <View style={{marginBottom: 24, marginTop: 24, textAlign: 'center'}}>
                            <Text style={{textAlign: 'center', color: '#707070'}}>
                                Or
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity onPress={signInFacebook}>
                                <SocialIcon
                                    light
                                    type='facebook'
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <SocialIcon
                                    light
                                    type='google-plus-official'
                                />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>
            )}
        </KeyboardShift>
    );
};

export default SignIn;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        margin: 'auto',
        justifyContent: 'center'
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
