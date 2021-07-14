import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import images from '../../assets/images'
import colors from '../../assets/colors';
import MainNavigator from '../main/MainNavigator'
StatusBar.setBarStyle('light-content');
import { vh, vw } from '../../components/dimension'
import { ScrollView } from 'react-native-gesture-handler'

const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email is required'),
    fullName: yup
        .string()
        .matches(/(\w.+\s).+/, 'Enter at least 2 names')
        .required('Name is required'),
    userName: yup
        .string()
        .matches(/^\w+$/, 'Username should be in alphanumeric')
        .required('Username is required'),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})
export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hidePassword: true }
    }
    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                        <Image style={styles.backArrow} source={require('../../assets/images/backArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Settings</Text>
                </View>
                <ScrollView>
                    <View style={styles.logoView}>
                        <Image style={styles.logo} source={images.logo} />
                    </View>
                    <View style={styles.descriptionView}>
                        <Text style={styles.description}>Sign up to see photos and videos </Text>
                        <Text style={styles.description}>from your friends.</Text>
                    </View>
                    <View style={styles.loginWithFbView}>
                        <Image source={images.facebookLogo} style={{ width: vw(20), height: vw(20) }} />
                        <TouchableOpacity style={{ alignItems: 'center', marginStart: vw(10) }} onPress={() => this.props.navigation.navigate('Login2')}>
                            <Text style={{ color: '#008bef' }}>Log In With Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewOR}>
                        <View style={styles.lineOrleft}></View>
                        <Text style={styles.textOR}>
                            OR
                        </Text>
                        <View style={styles.lineOrleft}></View>
                    </View>
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ email: '', fullName: '', userName: '', password: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            isValid,
                            touched,
                        }) => (
                            <View style={{ marginTop: 5 }}>
                                <View style={styles.userInputView}>
                                    <TextInput
                                        name="email"
                                        placeholder="Email or Phone number"
                                        placeholderTextColor={colors.textFaded2}
                                        style={styles.userNameInput}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        keyboardType="email-address"
                                    />
                                </View >
                                {(errors.email && touched.email) &&
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                }

                                <View style={styles.userInputView}>
                                    <TextInput
                                        name="fullName"
                                        placeholder="Full Name"
                                        placeholderTextColor={colors.textFaded2}
                                        style={styles.userNameInput}
                                        onChangeText={handleChange('fullName')}
                                        onBlur={handleBlur('fullName')}
                                        value={values.fullName}
                                    />
                                </View>
                                {(errors.fullName && touched.fullName) &&
                                    <Text style={styles.errorText}>{errors.fullName}</Text>
                                }

                                <View style={styles.userInputView}>
                                    <TextInput
                                        name="userName"
                                        placeholder="Username"
                                        placeholderTextColor={colors.textFaded2}
                                        style={styles.userNameInput}
                                        onChangeText={handleChange('userName')}
                                        onBlur={handleBlur('userName')}
                                        value={values.userName}
                                    />
                                </View>
                                {(errors.userName && touched.userName) &&
                                    <Text style={styles.errorText}>{errors.userName}</Text>
                                }
                                <View style={styles.userInputView} >
                                    <TextInput
                                        name="password"
                                        placeholder="Create Password"
                                        placeholderTextColor={colors.textFaded2}
                                        style={styles.userNameInput}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={this.state.hidePassword}
                                    />
                                    <TouchableOpacity activeOpacity={0.8} style={styles.eyeImgView} onPress={this.setPasswordVisibility}>
                                        <Image source={(this.state.hidePassword) ? require('../../assets/images/eyeInactive.png') : require('../../assets/images/eyeActive.png')} style={styles.eyeImgStyle} />
                                    </TouchableOpacity>
                                </View>
                                {(errors.password && touched.password) &&
                                    <Text style={styles.errorText}>{errors.password}</Text>
                                }
                                <TouchableOpacity style={styles.loginContainer} onPress={handleSubmit} disabled={!isValid}>
                                    <Text style={styles.loginText} onPress={() => this.props.navigation.navigate('MainNavigator')}>Sign Up</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', marginTop: vw(50) }}>
                                    <View
                                        style={styles.footerDividerView}>
                                    </View>
                                </View>
                                <View
                                    style={styles.footerInstView}>
                                    <Text style={{ color: '#969696' }}>By signing up, you agree to our</Text>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#008bef' }}> Terms & Privacy Policy.</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    headerView: {
        padding: vw(15),
        flexDirection: 'row'
    },
    backArrow: {
        height: vw(20),
        width: vw(20),
        marginTop: vh(10)
    },
    descriptionView: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: vw(10),
    },
    description: {
        fontSize: 15,
        color: colors.textFaded2,
    },
    userInputView: {
        borderColor: '#262626',
        backgroundColor: colors.loginInputBackground,
        borderWidth: 1,
        borderRadius: 5,
        height: vw(40),
        justifyContent: 'center',
        marginStart: vw(20),
        marginEnd: vw(20),
        marginTop: vw(20),
    },
    userNameInput: {
        color: 'white',
        padding: 10,
    },
    eyeImgView: {
        position: 'absolute',
        height: vw(40),
        width: vw(35),
        padding: vw(2),
        alignSelf: 'flex-end',
        marginEnd: vw(5),
        top: vw(5)
    },
    eyeImgStyle: {
        resizeMode: 'contain',
        height: '80%',
        width: '80%',
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginStart: vw(30),
        padding: vw(2)
    },
    logoView: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: vw(40)
    },
    logo: {
        width: '50%',
        height: vw(60),
    },
    loginContainer: {
        alignItems: 'center',
        height: vw(40),
        marginTop: vw(20),
        backgroundColor: '#0088f8',
        justifyContent: 'center',
        marginStart: vw(20),
        marginEnd: vw(20),
        borderRadius: 5,
    },
    loginText: {
        color: '#fff',
    },
    viewOR: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: vw(10),
    },
    lineOrleft: {
        flex: 1,
        height: vw(1),
        backgroundColor: '#262626'
    },
    textOR: {
        marginLeft: vw(40),
        marginRight: vw(40),
        color: '#969696'
    },
    loginWithFbView: {
        marginTop: vw(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerDividerView: {
        flex: 1,
        backgroundColor: '#262626',
        height: vh(1),
    },
    footerInstView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vw(10),
    }
})