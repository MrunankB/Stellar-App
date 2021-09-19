import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import SpaceCraftsScreen from "./screens/SpaceCrafts";
import DailyPicScreen from "./screens/DailyPic";
import StarMapScreen from "./screens/StarMap";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;