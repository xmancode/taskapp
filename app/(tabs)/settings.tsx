
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import DangerZone from '@/components/DangerZone';
import Preferencess from '@/components/Preferencess';
import ProgressStats from '@/components/ProgressStats';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




const Settings = () => {
  const {colors}=useTheme();
  const settingsStyles = createSettingsStyles(colors);

 
  return (
    <LinearGradient colors={colors.gradients.background} style={settingsStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
    <SafeAreaView style={settingsStyles.safeArea}>
      {/* header */}
      <View style={settingsStyles.header}>
        <View style={settingsStyles.titleContainer}>
          <LinearGradient colors={colors.gradients.primary} 
          style={settingsStyles.iconContainer}>
            <Ionicons name='settings'size={28} color='#ffffff'/>
          </LinearGradient>
          <Text style={settingsStyles.title}>Settings</Text>
        </View>
      </View>

      <ScrollView style={settingsStyles.scrollView}
         contentContainerStyle={settingsStyles.content}
         showsVerticalScrollIndicator={false}
      >
        {/* progress stats */}
        <ProgressStats/>
        {/* preferencess */}
        <Preferencess/>
        {/* danger zone */}
        <DangerZone/>
      </ScrollView>

        
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

