import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import images from '../../assets/images'
import colors from '../../assets/colors';
import { vh, vw } from '../../components/dimension'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email is required'),
})
export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props)
  }
  showAlert1() {  
    Alert.alert(  
        'Link Sent',  
        'Please check your mail to reset password',  
        [  
            {  
                text: 'Cancel',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]  
    );  
}  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoView}>
          <Image style={styles.logo} source={images.troubleshoot} />
        </View>
        <View style={styles.TroubleshootTitleView}>
          <TouchableOpacity>
            <Text style={styles.TroubleshootText}>Trouble Logging In?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>Enter your username or email and we'll send you </Text>
          <Text style={styles.description}>a link to get back into your account.</Text>
        </View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', }}
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
            <View>
              <View style={styles.userInputView}>
                <TextInput
                  name="email"
                  placeholder="Email, Phone or Username"
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
              <TouchableOpacity style={styles.loginContainer} onPress={handleSubmit} disabled={!isValid}>
                <Text style={styles.loginText}   onPress={this.showAlert1} >Send Login Link</Text>
              </TouchableOpacity>
              <View style={styles.viewOR}>
                <View style={styles.lineOrleft}></View>
                <Text style={styles.textOR}>
                  OR
                </Text>
                <View style={styles.lineOrleft}></View>
              </View>
              <View style={styles.loginWithFbView}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text style={{ color: '#008bef' }}>Create New Account</Text>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={{ color: '#008bef' }}> Back To Login</Text>
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
  TroubleshootTitleView: {
    alignItems: 'center',
    marginTop: 10
  },
  TroubleshootText: {
    color: '#0088f8',
    fontSize: 20
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
    padding: 10,
    marginStart: 22
  },
  logoView: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: '20%'
  },
  logo: {
    width: '25%',
    height: 110,
  },
  loginContainer: {
    alignItems: 'center',
    height: 40,
    backgroundColor: '#0088f8',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
    marginTop: 20
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
    flex: 1,
    height: 1,
    backgroundColor: '#262626'
  },
  textOR: {
    marginLeft: 40,
    marginRight: 40,
    color: '#969696'
  },
  loginWithFbView: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})