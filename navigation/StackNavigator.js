import React from "react";
import { View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from '../screens/test';
import ExpertiseListScreen from '../screens/ExpertiseListScreen';
import CvListScreen from '../screens/CvListScreen';
import CvDetailScreen from '../screens/CvDetailScreen';

const Stack = createNativeStackNavigator();

const CvStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="expertlist" component={ExpertiseListScreen} options={{headerShown: false}}/>
      <Stack.Screen name="cvlist" component={CvListScreen} options={{title: '', headerBackTitle: 'Nos domaines',}}/>
      <Stack.Screen name="detail" component={CvDetailScreen} options={{title: '', headerBackTitle: ' Nos profils'}}/>
    </Stack.Navigator>
  );
}


export default CvStackNavigator;