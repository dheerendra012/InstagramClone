import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import images from '../../assets/images'
import colors from '../../assets/colors';
import MainNavigator from '../main/MainNavigator'
import SignUp from './SignUp'
import { vw } from '../../components/dimension'
const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email is required'),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})
const data = [
    { key: 'English(US)' },
    { key: 'Hindi' },
    { key: 'Francals(France)' },
    { key: '中国人(Chinese)' },
    { key: 'Prortugues(Brasil)' },
    { key: 'Deutsch' },
    { key: 'Italian' },
    { key: 'Español' },
]


export default class Login2 extends React.Component {
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
                <View style={styles.logoView}>
                    <Image style={styles.fblogo} source={images.fblogo} />
                    <Image style={styles.logo} source={images.fbtextlogo} />
                </View>
                <View style={styles.instalogoview}>
                    <Image style={styles.instalogo} source={images.instalogo} />
                </View>
                <View style={styles.descriptionView}>
                    <Text style={styles.description}>Log into your Facebook account to </Text>
                    <Text style={styles.description}>connect to Instagram.</Text>
                </View>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ email: '', password: '' }}
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
                        <View style={{ marginTop: 20 }}>
                            <View style={styles.userInputView}>
                                <TextInput
                                    name="email"
                                    placeholder="Email or Mobile Number"
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
                          
                            <View style={[styles.userInputView, { bottom: 5 }]} >
                                <TextInput
                                    name="password"
                                    placeholder=" Facebook Password"
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
                                <Text style={styles.loginText} onPress={() => this.props.navigation.navigate('MainNavigator')}>Log In</Text>
                            </TouchableOpacity>
                            <View style={styles.createLink}>
                                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('SignUp')}>
                                    <Text style={styles.content}>Create Account</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                                    <Text style={styles.content}>Not now</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    marginTop: 20,
                                    marginStart: 20
                                }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={{ color: colors.textFaded2, }} > Help Center.</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
                                <View style={styles.langlist1}>
                                    <Text style={styles.langText}>English(US)</Text>
                                    <Text style={styles.langText}>Hindi</Text>
                                    <Text style={styles.langText}>Francals(France)</Text>
                                    <Text style={styles.langText}>中国人(Chinese)</Text>
                                </View>
                                <View style={[styles.langlist1]}>
                                    <Text style={styles.langText}>Prortugues(Brasil)</Text>
                                    <Text style={styles.langText}>Deutsch</Text>
                                    <Text style={styles.langText}>Italian</Text>
                                    <Image style={styles.addIcon} source={images.add} />
                                </View>
                            </View>
                                <Text style={{alignSelf:'center',color:'white'}}>Facebook © 2021</Text>
                        </View>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    userInputView: {
        borderColor: '#262626',
        backgroundColor: colors.loginInputBackground,
        borderWidth: vw(1),
        borderRadius: vw(5),
        height: vw(40),
        justifyContent: 'center',
        marginStart: vw(20),
        marginEnd: vw(20),
        marginTop: vw(20),
      },
      userNameInput: {
        color: 'white',
        padding: vw(10),
      },
      errorText: {
        fontSize: 12,
        color: 'red',
        marginStart: vw(30),
        padding:vw(5)
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
    logoView: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: vw(70),
        flexDirection: 'row',
        bottom: vw(20)
    },
    fblogo: {
        height: vw(30),
        width: vw(30)
    },
    logo: {
        width: '50%',
        height: vw(60),
        marginStart: vw(-10)
    },
    instalogoview: {
        alignItems: "center",
        justifyContent: 'center',
    },
    instalogo: {
        height: vw(40),
        width: vw(40)
    },
    descriptionView: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: vw(10),
        marginTop: vw(10)
    },
    description: {
        fontSize: 15,
        color: colors.textFaded2,
    },
    forgotPasswordText: {
        color: '#0088f8',
    },
    loginContainer: {
        alignItems: 'center',
        height: vw(40),
        marginTop: vw(10),
        backgroundColor: '#0088f8',
        justifyContent: 'center',
        marginStart: vw(20),
        marginEnd: vw(20),
        borderRadius: vw(5),
    },
    loginText: {
        color: '#fff',
    },
    loginWithFbView: {
        marginTop: vw(40),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    createLink: {
        marginTop: vw(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        color: '#0088f8',
        fontSize: 16,
        margin: vw(5),
        left: vw(10),
    },
    langText: {
        color: colors.textFaded2
    },
    langlist1: {
        margin: vw(20),
        alignItems: 'center'
    },
    addIcon: {
        height: vw(18),
        width: vw(18)
    },
})