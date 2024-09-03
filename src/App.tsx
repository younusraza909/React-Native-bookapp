import React, {useEffect} from 'react';
import HomeScreen from './screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import BookScreen from './screens/BookScreen';
import {StackParamList} from './types';
import BookShelvesScreen from './screens/BookShelvesScreen';
import useBookShelves from './store';

// Create a client
const queryClient = new QueryClient();

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  const {loadBooksFromStorage} = useBookShelves();

  useEffect(() => {
    loadBooksFromStorage();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="BookShelves" component={BookShelvesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
