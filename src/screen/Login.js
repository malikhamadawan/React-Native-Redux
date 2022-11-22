import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onLogin = async () => {
    try {
      if (email?.length > 0 && password?.length > 0) {
        const user = await auth().sendSignInLinkToEmail(email, password);
        if (user?.user.emailVerified) {
          navigation.navigate('Dashboard');

          console.log('user', user);
        }
      } else {
        alert('Please Verify Your Email');
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
        title="Login"
        onPress={() => {
          onLogin();
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            textAlign: 'center',
            marginTop: 10,
          }}>
          SignUp
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
