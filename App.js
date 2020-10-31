// import React, { Component } from 'react';
// import { View, Button, Text, TextInput, Image } from 'react-native';

// import auth from '@react-native-firebase/auth';


// const successImageUri = 'https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png';

// export default class PhoneAuthTest extends Component {
//   constructor(props) {
//     super(props);
//     this.unsubscribe = null;
//     this.state = {
//       user: null,
//       message: '',
//       codeInput: '',
//       phoneNumber: '+92',
//       confirmResult: null,
//     };
//   }
//   render(){
//     return(
//       <Text>WOW</Text>
//     )
//   }

//   async componentDidMount() {
//     const confirmation = await auth().signInWithPhoneNumber('+92 304-205-4458');
//     console.log(confirmation, 'ohh shh');
//   //   this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//   //     if (user) {
//   //       this.setState({ user: user.toJSON() });
//   //     } else {
//   //       // User has been signed out, reset the state
//   //       this.setState({
//   //         user: null,
//   //         message: '',
//   //         codeInput: '',
//   //         phoneNumber: '+92',
//   //         confirmResult: null,
//   //       });
//   //     }
//   //   });
//   }

//   // componentWillUnmount() {
//   //    if (this.unsubscribe) this.unsubscribe();
//   // }

//   // signIn = () => {
//   //   const { phoneNumber } = this.state;
//   //   this.setState({ message: 'Sending code ...' });

//   //   firebase.auth().signInWithPhoneNumber(phoneNumber)
//   //     .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
//   //     .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
//   // };

//   // confirmCode = () => {
//   //   const { codeInput, confirmResult } = this.state;

//   //   if (confirmResult && codeInput.length) {
//   //     confirmResult.confirm(codeInput)
//   //       .then((user) => {
//   //         this.setState({ message: 'Code Confirmed!' });
//   //       })
//   //       .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
//   //   }
//   // };

//   // signOut = () => {
//   //   firebase.auth().signOut();
//   // }

// //   renderPhoneNumberInput() {
// //    const { phoneNumber } = this.state;

// //     return (
// //       <View style={{ padding: 25 }}>
// //         <Text>Enter phone number:</Text>
// //         <TextInput
// //           autoFocus
// //           style={{ height: 40, marginTop: 15, marginBottom: 15 }}
// //           onChangeText={value => this.setState({ phoneNumber: value })}
// //           placeholder={'Phone number ... '}
// //           value={phoneNumber}
// //         />
// //         <Button title="Sign In" color="green" onPress={this.signIn} />
// //       </View>
// //     );
// //   }

// //   renderMessage() {
// //     const { message } = this.state;

// //     if (!message.length) return null;

// //     return (
// //       <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
// //     );
// //   }

// //   renderVerificationCodeInput() {
// //     const { codeInput } = this.state;

// //     return (
// //       <View style={{ marginTop: 25, padding: 25 }}>
// //         <Text>Enter verification code below:</Text>
// //         <TextInput
// //           autoFocus
// //           style={{ height: 40, marginTop: 15, marginBottom: 15 }}
// //           onChangeText={value => this.setState({ codeInput: value })}
// //           placeholder={'Code ... '}
// //           value={codeInput}
// //         />
// //         <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} />
// //       </View>
// //     );
// //   }

// //   render() {
// //     const { user, confirmResult } = this.state;
// //     return (
// //       <View style={{ flex: 1 }}>

// //         {!user && !confirmResult && this.renderPhoneNumberInput()}

// //         {this.renderMessage()}

// //         {!user && confirmResult && this.renderVerificationCodeInput()}

// //         {user && (
// //           <View
// //             style={{
// //               padding: 15,
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //               backgroundColor: '#77dd77',
// //               flex: 1,
// //             }}
// //           >
// //             <Image source={{ uri: successImageUri }} style={{ width: 100, height: 100, marginBottom: 25 }} />
// //             <Text style={{ fontSize: 25 }}>Signed In!</Text>
// //             <Text>{JSON.stringify(user)}</Text>
// //             <Button title="Sign Out" color="red" onPress={this.signOut} />
// //           </View>
// //         )}
// //       </View>
// //     );
// //   }
// }

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen1  from './Screen1';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            //onChangeText={text => this.setState({email:text})}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            //onChangeText={text => this.setState({email:text})}
            />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Screen1')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        {/* <Text onPress={() => this.props.navigation.navigate('Screen1')}>Home Screen</Text> */}
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      header: null,
    }
  },
});

const styles = StyleSheet.create({
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },

  inputText:{
    height:50,
    color:"white"
  },

  forgot:{
    color:"white",
    fontSize:11
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },



})

export default createAppContainer(AppNavigator);