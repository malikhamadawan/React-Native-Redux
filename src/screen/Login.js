import React, {useState} from 'react';
import {Alert, AsyncStorage, Button, TextInput, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <View>
      <TextInput value={email} onChangeText={text => setEmail(text)} />
      <Button title="Send login link" onPress={() => sendSignInLink(email)} />
    </View>
  );
};

const BUNDLE_ID = 'com.example.ios';

const sendSignInLink = async email => {
  const actionCodeSettings = {
    handleCodeInApp: true,
    // URL must be whitelisted in the Firebase Console.
    url: 'https://reduxsaga.page.link/learn',
    iOS: {
      bundleId: BUNDLE_ID,
    },
    android: {
      packageName: BUNDLE_ID,
      installApp: true,
      minimumVersion: '12',
    },
  };

  // Save the email for latter usage
  // await AsyncStorage.setItem('emailForSignIn', email);

  await auth().sendSignInLinkToEmail(email, actionCodeSettings);

  Alert.alert(`Login link sent to ${email}`);
  /* You can also show a prompt to open the user's mailbox using 'react-native-email-link'
   * await openInbox({ title: `Login link sent to ${email}`, message: 'Open my mailbox' }); */
};

export default Login;
