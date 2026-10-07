import './src/config/firebaseConfig'; // Primera línea obligatoria

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/config/screens/SplashScreen';
import LoginScreen from './src/config/screens/LoginScreen';
import RegisterScreen from './src/config/screens/RegisterScreen';
import OrdersScreen from './src/config/screens/OrdersScreen';
import InventoryScreen from './src/config/screens/InventoryScreen';
import ClientsScreen from './src/config/screens/ClientsScreen';
import SalesReportScreen from './src/config/screens/SalesReportScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="Clients" component={ClientsScreen} />
        <Stack.Screen name="Sales" component={SalesReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}