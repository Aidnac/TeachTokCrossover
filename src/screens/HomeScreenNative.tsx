import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {TeachTock} from '../components/TeachTok';

export const HomeScreenNative = () => {
  type OptionsType = {
    id: string;
    answer: string;
  };
  type TeachTok = {
    id: number;
    playlist: string;
    description: string;
    image: string;
    question: string;
    options: OptionsType[];
  };
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<TeachTok[]>([]);

  const url = 'https://cross-platform.rp.devfactory.com/for_you';

  const getTeachToks = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      data.push(json);
      setData(data);
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

  // return <>{isLoading ? <Text>Loading</Text> : <TeachTock />}</>;
  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={{flex: 1, height: Dimensions.get('window').height}}>
              <TeachTock prop={item} />
            </View>
          )}
        />
      )}
    </View>
  );
};
