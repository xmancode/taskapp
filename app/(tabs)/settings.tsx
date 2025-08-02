
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import useTheme from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




const Settings = () => {
  const {toggleDarkMode,colors}=useTheme();
  const settingsStyles = createSettingsStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.background} style={settingsStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
    <SafeAreaView style={settingsStyles.safeArea}>
      <Text >Settings</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle theme</Text></TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>
  )
}
// this is how dynamicaly change full color 
// const createStyles=(colors:ColorScheme)=>{
//   const styles= StyleSheet.create({
//   container:{
//     flex:1, 
//     justifyContent:"center",
//     alignItems:"center",
//     gap:10,
//     backgroundColor:colors.bg

//   },
//   content:{
//     fontSize:20
//   }
// }) 
//     return styles;
// } 



export default Settings

