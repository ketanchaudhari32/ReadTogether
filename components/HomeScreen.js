// components/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomePage from './HomePage'; // Import your HomePage component
import ExplorePage from './ExplorePage';
import MessagesPage from './MessagesPage';
import SettingsPage from './SettingsPage';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName="HomePage">
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExplorePage}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="explore" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesPage}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="message" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
