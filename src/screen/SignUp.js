import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignUp = async () => {
    try {
      if (email?.length > 0 && password?.length > 0) {
        const user = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        await auth().currentUser.sendEmailVerification();

        await auth().signOut();

        alert('Please Verify Your Email');

        navigation.replace('Login');

        console.log('user', user);
      } else {
        alert('Please Enter All fields');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
      }}>
      <TextInput
        placeholder="Enter Email"
        placeholderTextColor={'black'}
        style={{
          backgroundColor: 'red',
          width: '85%',
          alignSelf: 'center',
          marginBottom: 16,
        }}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        placeholder="Enter Password"
        placeholderTextColor={'black'}
        style={{
          backgroundColor: 'red',
          width: '85%',
          alignSelf: 'center',
          marginBottom: 16,
        }}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button
        title="SignUp"
        onPress={() => {
          onSignUp();
        }}
      />
    </View>
  );
};

export default SignUp;
