// components/HomePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Home Page!</Text>
      <View style={styles.tempComponent}>
        <Text>Temporary Component 1</Text>
      </View>
      <View style={styles.tempComponent}>
        <Text>Temporary Component 2</Text>
      </View>
      {/* Add more temporary components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempComponent: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default HomePage;
