// components/SplashScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      checkSavedCredentials();
    }, []);
  
    const checkSavedCredentials = async () => {
    //   try {
    //     // Check if credentials are saved in AsyncStorage
    //     const savedCredentials = await AsyncStorage.getItem('credentials');
  
    //     setTimeout(() => {
    //       if (savedCredentials) {
    //         navigation.replace('Home');
    //       } else {
    //         navigation.replace('Login');
    //       }
    //     }, 3000); // 3 seconds
    //   } catch (error) {
    //     console.log('Error checking saved credentials:', error);
    //     navigation.replace('Login');
    //   }
        try {
            const savedUser = await AsyncStorage.getItem('user');
            const savedPass = await AsyncStorage.getItem('pass');
    
            if (savedUser && savedPass) {
            // If credentials are saved, navigate to Home
            navigation.replace('Home');
            } else {
            // If no credentials are saved, navigate to Login
            navigation.replace('Login');
            }
        } catch (error) {
            console.log('Error checking credentials:', error);
        }
    };

  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/book_animation.json')} autoPlay loop />
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

export default SplashScreen;
