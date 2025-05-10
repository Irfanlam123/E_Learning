import { View, Text } from 'react-native'
import React from 'react'
import ConnectDoctorScreen from './component/connectdoctorScreen'

const Video = () => {
  return (
    <View style={{
        flex: 1,
        
        backgroundColor: '#F5FCFF',
    }}>
      <ConnectDoctorScreen/>
    </View>
  )
}

export default Video