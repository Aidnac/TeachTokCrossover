import React, {useEffect, useState} from 'react';
import {TopHeader} from '../components/TopHeader';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Question} from '../components/Question';
import {ActionButtons} from '../components/ActionButtons';

export const HomeScreenNative = () => {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const url = 'https://cross-platform.rp.devfactory.com/for_you';

  const getTeachToks = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log(data);
    }
  };

  useEffect(() => {
    getTeachToks();
  }, []);

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
          {isLoading ? (
            <Text style={{fontSize: 30}}>Loading</Text>
          ) : (
            <Text style={{fontSize: 30}}>
              {JSON.stringify(data.options[0].id)}
            </Text>
          )}
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
    justifyContent: 'center',
    flex: 0.3,
  },
  bottom: {
    flex: 0.6,
    justifyContent: 'space-between',
  },
});
