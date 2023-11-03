import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

export const Question = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Sample question</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  question: {color: '#fff', fontSize: 18},
});
