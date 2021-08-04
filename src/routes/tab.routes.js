import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { Home } from '../pages/Home';
import { MyTrails } from '../pages/MyTrails';
import { User } from '../pages/User';

const bottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <bottomTab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: '#000',
        activeBackgroundColor: '#000',
        activeTintColor: '#FFF',
        inactiveTintColor: '#FFF',
        labelPosition: 'below-icon',
        style: {
          height: 50
        },
        labelStyle: {
          fontSize: 12,
          marginBottom: 5
        }
      }}>
      <bottomTab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Trilhas',
          tabBarIcon: (({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ))
        }}
      />
      <bottomTab.Screen
        name='MyTrails'
        component={MyTrails}
        options={{
          title: 'Minhas Trilhas',
          tabBarIcon: (({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'md-list' : 'md-list-outline'}
              size={size}
              color={color}
            />
          ))
        }}
      />
      <bottomTab.Screen
        name='User'
        component={User}
        options={{
          title: 'Perfil',
          tabBarIcon: (({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ))
        }}
      />
    </bottomTab.Navigator>
  )
}

export default TabRoutes;