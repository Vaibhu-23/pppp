import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScr from '../screens/SignInScr';
import SignUpScr from '../screens/SignUpScr';
import ConfirmEmail from '../screens/confirmEmail';
import ForgotPass from '../screens/ForgotPass';
import NewPass from '../screens/NewPass';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScr} />
        <Stack.Screen name="SignUp" component={SignUpScr} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="ForgotPassword" component={ForgotPass} />
        <Stack.Screen name="NewPassword" component={NewPass} />

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
