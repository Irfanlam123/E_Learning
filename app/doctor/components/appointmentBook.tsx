import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const ConfirmationScreen = () => {
//   const { doctorName, appointmentTime, userName } = route.params;
//   const navigation = useNavigation();

  const handleConnectDoctor = () => {
    // Navigate to video call screen with doctor info
    // navigation.navigate('VideoCall', {
    //   doctorName,
    //   userName,
    // });
    router.push("/video")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Appointment Confirmed</Text>
      <Text style={styles.subTitle}>
        Your appointment with Dr. Anjali is confirmed!
      </Text>
      <Text style={styles.subTitle}>Appointment Time: 9AM</Text>

      <TouchableOpacity
        onPress={handleConnectDoctor}
        style={styles.connectButton}
      >
        <Text style={styles.connectButtonText}>Connect with video call</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 20,
  },
  subTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  connectButton: {
    backgroundColor: '#0af',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ConfirmationScreen;
