import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {deletePostActions, getPostActions} from '../redux/actions';

const Dashboard = () => {
  const [postList, setPostList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    showAllPost();
  }, []);

  const showAllPost = () => {
    try {
      const cbSuccess = res => {
        setPostList(res);
      };
      const cbFailure = err => {
        console.log('cbFailure', err);
      };
      dispatch(getPostActions(cbSuccess, cbFailure));
    } catch (error) {
      console.log('catch error', error);
    }
  };

  const deletePost = id => {
    try {
      const cbSuccess = res => {
        let array = [...postList];
        let modifyArray = array.filter((val, i) => {
          if (val.id !== id) {
            return val;
          }
        });
        setPostList(modifyArray);
      };
      const cbFailure = err => {
        console.log('cbFailure', err);
      };
      dispatch(deletePostActions(id, cbSuccess, cbFailure));
    } catch (error) {
      console.log('catch error', error);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.boxContainer}>
        <Text style={styles.titleTextStyle}>
          {item?.id}. {item?.title}
        </Text>
        <Text style={styles.bodyTextStyle}>{item?.body}</Text>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            deletePost(item?.id);
          }}>
          <Text style={styles.deleteTextStyle}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item?.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.spacer} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  spacer: {
    marginBottom: 16,
  },
  boxContainer: {
    flex: 1,
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
  titleTextStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bodyTextStyle: {
    color: 'black',
  },
  btnContainer: {
    marginTop: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  deleteTextStyle: {
    color: 'black',
    fontSize: 16,
  },
});

export default Dashboard;
