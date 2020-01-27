/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
    piKey: "AIzaSyD0CsC2yspi0TRxCIYxymjL0DW6ypseQWw",
    authDomain: "fir-phoneauth-9e74f.firebaseapp.com",
    databaseURL: "https://fir-phoneauth-9e74f.firebaseio.com",
    projectId: "fir-phoneauth-9e74f", 
    storageBucket: "fir-phoneauth-9e74f.appspot.com",
    messagingSenderId: "197117142474",
    appId: "1:197117142474:android:a8d5acc4c7ab7e8dc25b33"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
AppRegistry.registerComponent(appName, () => App);
