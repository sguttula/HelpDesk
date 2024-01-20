import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AdminPage from "./AdminPage";
import MainPage from "./MainPage";

export default function App () {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Main" 
       screenOptions={{
       headerShown: false
       }}
       >
         <Stack.Screen name="Main" component={MainPage} />
         <Stack.Screen name="Admin" component={AdminPage} />
       </Stack.Navigator>
     </NavigationContainer>
  )
}