import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const ConnectDoctorScreen = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const startCall = () => {
    if (name.trim()) {
      navigation.navigate('VideoCall', { userName: name });
    }
    router.push("/video/component/videoCallScreen")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👨‍⚕️ Connect with Doctor</Text>
      <TextInput
        placeholder="Enter Your Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={startCall}>
        <Text style={styles.buttonText}>Start Video Call</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConnectDoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0af',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
