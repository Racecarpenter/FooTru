import React from 'react';
import { TabNavigator, StackNavigator, Tab } from 'react-navigation';

import FTList from '../components/FTList';
import Splash from '../components/Splash';
import LoginForm from '../components/LoginForm';
import Map from '../components/Map';
import FTPostLoc from '../components/FTPostLoc';


export const router = StackNavigator({
  Splash: {
    screen: Splash
  },
  FTList: {
    screen: FTList
  },
  LoginForm: {
    screen: LoginForm
  },
  Map: {
    screen: Map
  },
  FTPostLoc: {
    screen: FTPostLoc
  }
},{
  initialRouteName: 'Splash'
})
