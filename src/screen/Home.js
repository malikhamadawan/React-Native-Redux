import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrementActions, incrementActions} from '../redux/actions/actions';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onAdd = () => {
    // const data = {
    //   email: email,
    //   password: password,
    // };

    // dispatch(incrementActions(data));
    navigation.navigate('Dashboard');
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
        title="Add"
        onPress={() => {
          onAdd();
        }}
      />

      <View>
        <Text
          style={{
            color: 'black',
          }}>
          {email}
        </Text>
        <Text
          style={{
            color: 'black',
          }}>
          {password}
        </Text>
      </View>
    </View>
  );
};

export default Home;
