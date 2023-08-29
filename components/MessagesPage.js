// components/MessagesPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessagesPage = () => {
  return (
    <View style={styles.container}>
      <Text>Messages Page</Text>
      {/* Your MessagesPage content */}
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

export default MessagesPage;
