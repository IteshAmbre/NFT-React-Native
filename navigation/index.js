import AuthStack from './AuthStack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const Routes = ({navigation}) => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
