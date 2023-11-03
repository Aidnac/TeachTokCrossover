import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const TopHeader2 = styled.View`
  padding: 20px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background-color: tomato;
`;
export const TopHeader = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="compass" color={'#fff'} size={30} />
      <Text style={styles.forYouText}>For you</Text>
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
    textDecorationLine: 'underline',
  },
});
