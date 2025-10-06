import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CodeEditorScreen from './screens/CodeEditorScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CodeEditor">
        <Stack.Screen name="CodeEditor" component={CodeEditorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}// React Native App entry
