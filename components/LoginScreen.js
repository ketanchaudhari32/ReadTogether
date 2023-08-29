// components/LoginScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { appleAuth } from '@invertase/react-native-apple-authentication';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

//GoogleSignin.configure({
  // Configure Google Sign-In
//});

const LoginScreen = ({ navigation }) => {
    
    const handleLogin = async () => {
        // Create a temporary user and password
        const user = 'temporary_user';
        const password = 'temporary_password';
    
        try {
          // Save credentials securely (e.g., AsyncStorage)
          await saveCredentials(user, password);
          navigation.replace('Home');
        } catch (error) {
          console.log('Login error:', error);
        }
    };
    // const handleAppleLogin = async () => {
    //   try {
    //     const appleAuthRequestResponse = await appleAuth.performRequest({
    //       requestedOperation: appleAuth.Operation.LOGIN,
    //       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    //     });
  
    //     // Save credentials securely (e.g., AsyncStorage)
    //     await saveCredentials(appleAuthRequestResponse);
    //     navigation.replace('Home');
    //   } catch (error) {
    //     console.log('Apple login error:', error);
    //   }
    // };
  
    // const handleGoogleLogin = async () => {
    //   try {
    //     await GoogleSignin.hasPlayServices();
    //     const userInfo = await GoogleSignin.signIn();
  
    //     // Save credentials securely (e.g., AsyncStorage)
    //     await saveCredentials(userInfo);
    //     navigation.replace('Home');
    //   } catch (error) {
    //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //       console.log('Google login cancelled');
    //     } else {
    //       console.log('Google login error:', error);
    //     }
    //   }
    // };
  
    // const saveCredentials = async (credentials) => {
    //   try {
    //     // Store credentials in AsyncStorage
    //     await AsyncStorage.setItem('credentials', JSON.stringify(credentials));
    //   } catch (error) {
    //     console.log('Error saving credentials:', error);
    //   }
    // };

    const saveCredentials = async (user, pass) => {
        try {
          // Store credentials in AsyncStorage
          await AsyncStorage.setItem('user', user);
          await AsyncStorage.setItem('pass', pass);
        } catch (error) {
          console.log('Error saving credentials:', error);
        }
      };

//   return (
//     <View style={styles.container}>
//       <Text>Login Screen</Text>
//       <TouchableOpacity style={styles.button} onPress={handleAppleLogin}>
//         <Text>Login with Apple</Text>
//       </TouchableOpacity>
//       {/* <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
//         <Text>Login with Google</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
    return (
        <View style={styles.container}>
        <Text>Login Screen</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text>Login</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default LoginScreen;
