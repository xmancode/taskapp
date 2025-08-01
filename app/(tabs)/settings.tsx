import useTheme from '@/hooks/useTheme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Settings = () => {
  const {toggleDarkMode}=useTheme();
  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle theme</Text></TouchableOpacity>
    </View>
  )
}

export default Settings