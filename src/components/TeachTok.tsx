import React from 'react';
import {TopHeader} from '../components/TopHeader';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Answer} from './Answer';
import {ActionButtons} from '../components/ActionButtons';
import mcq from '../data/mcq';

export const TeachTock = ({prop}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      source={{
        uri: 'https://cross-platform-rwa.rp.devfactory.com/images/5059%20-%20Free%20Soil%20Party.png',
      }}>
      <View style={styles.container}>
        <View style={styles.top}>
          <TopHeader />
        </View>

        <View style={styles.middle}>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.8)',
              }}>
              {prop.question}
            </Text>
          </View>
          {/* {isLoading ? (
            <Text style={{fontSize: 24}}>Loading</Text>
          ) : (
            <View style={{flex: 0.5}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  backgroundColor: 'rgba(0,0,0,0.8)',
                }}>
                {JSON.stringify(data.question)}
              </Text>
            </View>
          )} */}
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
                  {/* <Text>{prop.options ? prop.options.map((x)=><Text></Text>) 'not avaible'}</Text> */}

                  <Answer mcq={prop.options[0].answer} />
                  <Answer mcq={prop.options[1].answer} />
                  <Answer mcq={prop.options[2].answer} />
                </View>
              </View>
              <View>
                <Text style={{color: 'white'}}>AP US History</Text>
                <Text style={{color: 'white'}}>5.5 section</Text>
              </View>
            </View>

            <View style={{flexDirection: 'column', flex: 0.2}}>
              <ActionButtons />
            </View>
          </View>

          <View>
            <Text style={{padding: 20, color: 'white'}}>
              Playlist.Uni5:eriod 6:1865-1898
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 32,
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
    justifyContent: 'center',
    flex: 0.3,
  },
  bottom: {
    flex: 0.6,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
});
