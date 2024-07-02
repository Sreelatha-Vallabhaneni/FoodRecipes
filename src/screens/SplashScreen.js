// Import necessary modules
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

// Import your logo image
import logo from '../assets/Logo.png';

// Define the Splash Screen Component
const SplashScreen = ({ navigation }) => {
  // Define animation values
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    // Animate logo
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 2800, // Animation duration
      useNativeDriver: true,
    }).start(); // Start the animation
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTab'); // Navigate to your main tab screen after the splash animation
    }, 3000); // Adjust the duration as needed
  }, []);

  return (
    <View style={styles.container}>
        {/* <Image
            source={logo}
            style={styles.logo}
        /> */}
      <Animated.Image
        source={logo}
        style={[styles.logo, { opacity: logoOpacity }]}
        resizeMode="contain"
      />
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff', // Set background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    borderRadius: 100,
    width: 200, // Set logo width
    height: 200, // Set logo height
  },
});

// Export the SplashScreen component
export default SplashScreen;
