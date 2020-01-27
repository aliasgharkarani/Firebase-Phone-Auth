import React from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
export default class HomeScreen extends React.Component {
  async componentDidMount() {
        const confirmation = await auth().signInWithPhoneNumber('+91 304-205-4458');
        console.log(confirmation, 'ohh shh');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 1</Text>
      </View>
    );
  }
}