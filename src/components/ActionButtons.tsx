import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const UserActionBtn = () => {
  return (
    <>
      <TouchableOpacity style={styles.userRight}>
        <View style={styles.userRightImage}>
          <MaterialCommunityIcons
            name="account-circle"
            color={'#f00'}
            size={40}
          />
        </View>
        <View style={styles.userPlus}>
          <MaterialCommunityIcons name="plus" color={'#fff'} size={30} />
        </View>
      </TouchableOpacity>
    </>
  );
};
export const ActionButtons = () => {
  return (
    <View style={styles.container}>
      <UserActionBtn />
      <MaterialCommunityIcons name="heart" color={'#fff'} size={30} />
      <MaterialCommunityIcons name="chat-processing" color={'#fff'} size={30} />
      <MaterialCommunityIcons name="bookmark" color={'#fff'} size={30} />
      <MaterialCommunityIcons name="share" color={'#fff'} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  question: {color: '#fff'},

  userRight: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#f00',
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userRightImage: {
    flex: 1,
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  userPlus: {
    top: -10,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#f00',
  },
});
// top: -10px;
//   width: 20px;
//   height: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 25px;
//   background: #f00;
