import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const ProgressStats = () => {
    const {colors}=useTheme();
    const settingsStyles=createSettingsStyles(colors);
    const todos=useQuery(api.todos.getTodos);
    const totalTodos=todos ?todos.length :0;
    const completedTodos=todos ? todos.filter((todo)=>todo.isCompleted).length : 0 ;
    const activeTodos=totalTodos-completedTodos;
  return (

    <LinearGradient style={settingsStyles.section} colors={colors.gradients.surface}>
        <Text style={settingsStyles.sectionTitle}>Progress Status</Text>
    <View style={settingsStyles.statsContainer}>
        {/* total todos */}
      <LinearGradient colors={colors.gradients.background} 
       style={[settingsStyles.statCard,{borderLeftColor: colors.primary}]}>
        <View style={settingsStyles.statsContainer}>
         <LinearGradient colors={colors.gradients.primary} style={settingsStyles.statIcon}>
            <Ionicons name='list' size={20} color='#ffffff'/>
         </LinearGradient>
        </View>
        <View style={{paddingLeft:20}}>
            <Text style={settingsStyles.statNumber}>{totalTodos}</Text>
             <Text style={settingsStyles.statLabel}>Total todos</Text>
        </View>

      </LinearGradient>
       {/* completed todos */}
       <Text style={settingsStyles.sectionTitle}>Completed</Text>
      <LinearGradient colors={colors.gradients.background} 
       style={[settingsStyles.statCard,{borderLeftColor: colors.success}]}>
        <View style={settingsStyles.statsContainer}>
         <LinearGradient colors={colors.gradients.success} style={settingsStyles.statIcon}>
            <Ionicons name='checkmark-circle' size={20} color='#ffffff'/>
         </LinearGradient>
        </View>
        <View style={{paddingLeft:20}}>
            <Text style={settingsStyles.statNumber}>{completedTodos}</Text>
             <Text style={settingsStyles.statLabel}>Completed</Text>
        </View>

      </LinearGradient>
      {/* Active  todos */}
      <Text style={settingsStyles.sectionTitle}>Active Todos</Text>
      <LinearGradient colors={colors.gradients.background} 
       style={[settingsStyles.statCard,{borderLeftColor: colors.warning}]}>
        <View style={settingsStyles.statsContainer}>
         <LinearGradient colors={colors.gradients.warning} style={settingsStyles.statIcon}>
            <Ionicons name='time' size={20} color='#ffffff'/>
         </LinearGradient>
        </View>
        <View style={{paddingLeft:20}}>
            <Text style={settingsStyles.statNumber}>{activeTodos}</Text>
             <Text style={settingsStyles.statLabel}>Active</Text>
        </View>

      </LinearGradient>

    </View>
    </LinearGradient>
  )
}

export default ProgressStats