import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreenNative} from '../screens/HomeScreenNative';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Discovery"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {backgroundColor: '#000000'},
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreenNative}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Discovery"
        component={HomeScreenNative}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="compass" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Activity"
        component={HomeScreenNative}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="timer" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Bookmarks"
        component={HomeScreenNative}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={HomeScreenNative}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
