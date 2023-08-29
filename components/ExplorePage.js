// components/ExplorePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExplorePage = () => {
  return (
    <View style={styles.container}>
      <Text>Explore Page</Text>
      {/* Your ExplorePage content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExplorePage;
