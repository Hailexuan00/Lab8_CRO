import React from 'react';
import { View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Home</Text>
    </View>
  );
}
