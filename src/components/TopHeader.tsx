import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const TopHeader = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons name="timer" color={'#fff'} size={30} />
        <Text style={{color: 'white'}}>10m</Text>
      </View>
      <Text style={styles.forYouText}>For You</Text>
      <MaterialCommunityIcons name="magnify" color={'#fff'} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forYouText: {
    color: 'white',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
