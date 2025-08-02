import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const {toggleDarkMode,colors}=useTheme();
     const homeStyles=createHomeStyles(colors);
     const todos= useQuery(api.todos.getTodos);
     const completetdCount=  todos? todos.filter((todo)=>todo.isCompleted).length: 0;
     const totalCount= todos ? todos.length :0 ;
     const progressPercentage= totalCount >0 ? (completetdCount/totalCount)*100 :0;


  return (
    <View style={homeStyles.header}>
        <View style={homeStyles.titleContainer}>
            <LinearGradient style={homeStyles.iconContainer}
             colors={colors.gradients.primary}>
                <Ionicons name='flash-outline' color='#ffffff' size={28}/>
            </LinearGradient>

            <View style={homeStyles.titleTextContainer}>
                <Text style={homeStyles.title}>Today&apos;s Task</Text>
                <Text style={homeStyles.subtitle}>
                    {completetdCount} of {totalCount} completed
                </Text>
            </View>
        </View>

        {
            true && (<View style={homeStyles.progressContainer}>
                <View style={homeStyles.progressBarContainer}>
                    <View style={homeStyles.progressBar}>
                        <LinearGradient
              colors={colors.gradients.success}
              style={[homeStyles.progressFill, { width: `${progressPercentage}%` }]}
            />
            </View>
                        <Text style={homeStyles.progressText}>{Math.round(progressPercentage)}%</Text>
                    </View>
            </View>)
        }

    </View>
  )
}

export default Header