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
import ForgotPassword from './ForgotPassword'
import SignUp from './SignUp'

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
export default class Login extends React.Component {
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
          <Image style={styles.logo} source={images.logo} />
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
                  placeholder="Email, Username or Phone number"
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
              <View style={styles.userInputView} >
                <TextInput
                  name="password"
                  placeholder="Password"
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
              <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                  <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.loginContainer} onPress={handleSubmit} disabled={!isValid}>
                <Text style={styles.loginText} onPress={() => this.props.navigation.navigate('MainNavigator')}>Log In</Text>
              </TouchableOpacity>
              <View style={styles.viewOR}>
                <View style={styles.lineOrleft}></View>
                <Text style={styles.textOR}>
                  OR
                </Text>
                <View style={styles.lineOrleft}></View>
              </View>
              <View style={styles.loginWithFbView}>
                <Image source={images.facebookLogo} style={{ width: 20, height: 20 }} />
                <TouchableOpacity style={{ alignItems: 'center', marginStart: 10 }} onPress={() => this.props.navigation.navigate('Login2')}>
                  <Text style={{ color: '#008bef' }}>Log In With Facebook</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 50 }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#262626',
                    height: 1,
                  }}></View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <Text style={{ color: '#969696' }}>Don't have an account ?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text style={{ color: '#008bef' }}> Sign Up.</Text>
                </TouchableOpacity>
              </View>
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
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
  },
  userNameInput: {
    color: 'white',
    padding: 10,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginStart: 30,
    padding: 5
  },
  logoView: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 90
  },
  logo: {
    width: '50%',
    height: 60,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginEnd: 20,
    marginTop: 10
  },
  forgotPasswordText: {
    color: '#0088f8',
  },
  loginContainer: {
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    backgroundColor: '#0088f8',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
  },
  eyeImgView: {
    position: 'absolute',
    height: 40,
    width: 35,
    padding: 2,
    alignSelf: 'flex-end',
    marginEnd: 5,
    top: 5
  },
  eyeImgStyle: {
    resizeMode: 'contain',
    height: '80%',
    width: '80%',
  },
  loginText: {
    color: '#fff',
  },
  viewOR: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  lineOrleft: {
    flex: 1, height: 1, backgroundColor: '#262626'
  },
  textOR: {
    marginLeft: 40, marginRight: 40, color: '#969696'
  },
  loginWithFbView: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})