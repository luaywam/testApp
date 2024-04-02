// SignInScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import eyeIcon from '../assets/eye.png'; // Import your eye icon image
import googleIcon from '../assets/google.png'; // Import your Google icon image

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSignIn = () => {
    // Add your sign-in logic here
    console.log(`Signing in with username: ${username}, password: ${password}`);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSignInWithGoogle = () => {
    // Add your "Sign In with Google" logic here
    console.log('Signing in with Google');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Image source={eyeIcon} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={toggleCheckbox}>
          <View style={styles.checkbox}>
            {isChecked && <Image source={require('../assets/checkIcon.png')} style={styles.checkboxIcon} />}
          </View>
        </TouchableOpacity>
        <Text style={styles.checkboxText}>I agree with Terms & Privacy  </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignIn} disabled={!isChecked}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.signInWithGoogleButton} onPress={handleSignInWithGoogle}>
        <Text style={styles.signInWithGoogleText}>Sign In with Google   </Text>
        <Image source={googleIcon} style={styles.googleIcon} />

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
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    padding: 8,
  },
  eyeIcon: {
    padding: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxIcon: {
    width: 15,
    height: 15,
    // your checkbox checked image styles
  },
  checkboxText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: 'gray',
    marginVertical: 16,
  },
  signInWithGoogleButton: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center', // Center the content horizontally

    width: '100%',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  signInWithGoogleText: {
    color: '#3498db',
    fontSize: 16,
    
  },
});

export default SignInScreen;