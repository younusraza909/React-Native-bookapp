import React from 'react';
import HomeScreen from './screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import BookScreen from './screens/BookScreen';

// Create a client
const queryClient = new QueryClient();

const Stack = createStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
