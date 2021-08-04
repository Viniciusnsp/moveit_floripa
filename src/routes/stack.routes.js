import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../pages/Login';
import { TrailDetail } from '../pages/TrailDetail';
import { UserRegistration } from '../pages/UserRegistration';

import TabRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
  <stackRoutes.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: '#000'
      },
    }}
  >
    <stackRoutes.Screen
      name='Login'
      component={Login}
    />
      <stackRoutes.Screen 
       name='UserRegistration'
       component={UserRegistration}
     />
    <stackRoutes.Screen
      name='Home'
      component={TabRoutes}
    />
    <stackRoutes.Screen
      name='MyTrails'
      component={TabRoutes}
    />
    <stackRoutes.Screen
      name='TrailDetail'
      component={TrailDetail}
    />
    <stackRoutes.Screen
      name='User'
      component={TabRoutes}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes;