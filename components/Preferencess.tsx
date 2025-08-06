import { createSettingsStyles } from '@/assets/styles/settings.styles';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

const Preferencess = () => {
  const [isAutoSync, setisAutoSync] = useState(true);
  const [isNotificationEnabled, setisNotificationEnabled] = useState(true);
  const {toggleDarkMode,colors,isDarkMode} =useTheme();
  const settingsStyles=createSettingsStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>
      {/* dark mode */}
      <View style={settingsStyles.settingItem}>
         <View style={settingsStyles.settingLeft}>
            <LinearGradient style={settingsStyles.settingIcon} colors={colors.gradients.primary}>
                <Ionicons name='moon' size={20} color="#fff"/>
                </LinearGradient> 
                <Text style={settingsStyles.settingText}>Dark Mode</Text>
         </View>
        <Switch 
         value={isDarkMode}
         onValueChange={toggleDarkMode}
         thumbColor={"#fff"}
        trackColor={{false: colors.border,true:colors.primary}}
        ios_backgroundColor={colors.border}
        />

      </View>
      {/* notification */}
      <View style={settingsStyles.settingItem}>
         <View style={settingsStyles.settingLeft}>
            <LinearGradient style={settingsStyles.settingIcon} colors={colors.gradients.warning}>
                <Ionicons name='notifications' size={20} color="#fff"/>
                </LinearGradient> 
                <Text style={settingsStyles.settingText}>Notification</Text>
         </View>
        <Switch 
         value={isNotificationEnabled}
         onValueChange={()=>setisNotificationEnabled(!isNotificationEnabled)}
         thumbColor={"#fff"}
        trackColor={{false: colors.border,true:colors.warning}}
        ios_backgroundColor={colors.border}
        />

      </View>
      {/* auto sync */}
      <View style={settingsStyles.settingItem}>
         <View style={settingsStyles.settingLeft}>
            <LinearGradient style={settingsStyles.settingIcon} colors={colors.gradients.success}>
                <Ionicons name='repeat-outline' size={20} color="#fff"/>
                </LinearGradient> 
                <Text style={settingsStyles.settingText}>Auto Sync</Text>
         </View>
        <Switch 
         value={isAutoSync}
         onValueChange={()=>setisAutoSync(!isAutoSync)}
         thumbColor={"#fff"}
        trackColor={{false: colors.border,true:colors.success}}
        ios_backgroundColor={colors.border}
        />

      </View>
    </LinearGradient>
  )
}

export default Preferencess