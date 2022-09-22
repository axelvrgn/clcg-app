import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CvStackNavigator from './StackNavigator';
import ExpertiseListScreen from '../screens/ExpertiseListScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import CvListScreen from '../screens/CvListScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true,
            tabBarStyle: {
              backgroundColor: '#e6e6e6',
            },
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name == "home"){
                  iconName = focused ? "home" : "home-outline";
                }
                else if(route.name == "about"){
                  iconName = focused ? "help-circle" : "help-circle-outline";
                }
                else if(route.name == "Detail"){
                  iconName = focused ? "eye" : "eye-outline";
                }
                else if(route.name == "cv"){
                  iconName = focused ? "document-text" : "document-text-outline"
                }
                else if(route.name == "expertlist"){
                  iconName = focused ? "menu" : "menu-outline"
                }
                return <Ionicons name={iconName} size={35} color={color} /> 
              },         
            tabBarActiveTintColor: 'rgb(86,179,128)',
            })}>
            <Tab.Screen name="home" component={HomeScreen} options={{tabBarStyle: {display: 'none'}}}/>
            <Tab.Screen name="about" component={AboutScreen}/>
            <Tab.Screen name="cv" component={CvStackNavigator}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;