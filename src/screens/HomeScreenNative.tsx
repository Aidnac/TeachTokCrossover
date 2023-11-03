import React from 'react';
import {TopHeader} from '../components/TopHeader';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Question} from '../components/Question';
import {ActionButtons} from '../components/ActionButtons';

export const HomeScreenNative = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      source={require('../../assets/ferry.png')}>
      <View style={styles.container}>
        <View style={styles.top}>
          <TopHeader />
        </View>

        <View style={styles.middle}>
          <Text style={{fontSize: 30}}>What led to the Compromise of 1850</Text>
        </View>

        <View style={styles.bottom}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'column',
                flex: 0.8,
                justifyContent: 'space-around',
              }}>
              <View>
                <View>
                  <Question />
                  <Question />
                  <Question />
                </View>
              </View>
              <View>
                <Text>AP US History</Text>
              </View>
            </View>

            <View style={{flexDirection: 'column', flex: 0.2}}>
              <ActionButtons />
            </View>
          </View>

          <View>
            <Text style={{padding: 20}}>Playlist.Uni5:eriod 6:1865-1898</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    flex: 0.1,
  },
  middle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.3,
  },
  bottom: {
    flex: 0.6,
    justifyContent: 'space-between',
  },
});
