// components/VideoCallScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VideoCallScreen = () => {
  return (
    <View style={styles.container}>
      {/* Remote Video */}
      <View style={styles.remoteVideo}>
        <Text style={styles.text}>👤 Remote Video</Text>
      </View>

      {/* Local Video in Small Window */}
      <View style={styles.localVideo}>
        <Text style={styles.text}>📹 You</Text>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>🔇</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}>
          <Text style={styles.btnText}>❌</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>🔄</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoCallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  remoteVideo: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  localVideo: {
    position: 'absolute',
    width: 120,
    height: 180,
    bottom: 100,
    right: 20,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  controls: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});
