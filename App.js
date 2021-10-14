import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SectionList } from 'react-native';
import FlatListPractice from './src/screens/FlatListPractice';
import ResultShowScreen from './src/screens/ResultShowScreen';
import SearchScreen from './src/screens/SearchScreen';
import SectionListExample from './src/screens/SectionListExample';
import SectionPractice from './src/screens/SectionPractice';


const Stack=createNativeStackNavigator();
const App=() => {


  return (
 <NavigationContainer>
   <Stack.Navigator initialRouteName="Search">
     <Stack.Screen name="Search" component={SearchScreen}/>
     <Stack.Screen name="ResultShow" component={ResultShowScreen}/>
   </Stack.Navigator>
 </NavigationContainer>
  );
};



export default App;
