// import React from 'react';
// import { View, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';
// export default class HomeScreen extends React.Component {
//   async componentDidMount() {
//         const confirmation = await auth().signInWithPhoneNumber('+91 304-205-4458');
//         console.log(confirmation, 'ohh shh');
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Screen 1</Text>
//       </View>
//     );
//   }
// }

import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import firestore from '@react-native-firebase/firestore';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';


class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>

                <ImageBackground
                    style={{ width: wp('100%'), height: hp('100%'), justifyContent: 'center', alignItems: 'center' }}
                    source={{ uri: 'https://www.linkpicture.com/q/im2_1.png' }}
                >
                    <View style={styles.secContainer}>
                        <View style={styles.icon}>
                            <Image
                                style={{ width: wp('40%'), height: hp('21%'), resizeMode: 'contain' }}
                                source={{ uri: 'https://www.linkpicture.com/q/logo1_19.png' }}

                            />
                        </View>
                        <View style={styles.menucontainer}>
                            <TouchableOpacity style={styles.submenu}
                                onPress={() => { this.props.navigation.navigate('Map') }}
                            >
                                <Text style={{ fontSize: hp('3%'), color: 'white' }}>View Map</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.submenu}>
                                <Text style={{ fontSize: hp('3%'), color: 'white' }}>Emergency Query</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:
    {
        //backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    secContainer:
    {
        backgroundColor: 'white',
        height: hp('63%'),
        width: wp('85%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: '#5499C7',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 4,
    },

    icon:
    {
        //backgroundColor: 'yellow',
        height: hp('25%'),
        width: wp('85%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('2%')
    },

    menucontainer:
    {
        //backgroundColor:'blue',
        height: hp('30%'),
        width: wp('75%'),
        alignItems: 'center',
        justifyContent: 'center'
    },

    submenu:
    {
        backgroundColor: '#5499C7',
        width: wp('65%'),
        height: hp('6.5%'),
        borderRadius: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%')
    }
})

export default Dashboard
