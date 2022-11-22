import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Dashboard = () => {
  const data = useSelector(state => state?.counterReducer);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 25,
          fontWeight: 'bold',
          paddingBottom: 5,
        }}>
        {data?.userData?.email}
      </Text>

      <Text
        style={{
          color: 'black',
          fontSize: 20,
        }}>
        {data?.userData?.password}
      </Text>
    </View>
  );
};

export default Dashboard;
