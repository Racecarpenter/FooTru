import React from 'react';
import { TabNavigator, StackNavigator, Tab } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';


import App from '../App';
import FTList from '../components/FTList';


export const Tabs = TabNavigator({
  App: { screen: App },
  FTList: { screen: FTList }
}, {
  initialRouteName: 'Home',
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'black',
      rippleColor: 'rgb(252,55,62)',
      tabs: {
        App: {
          barBackgroundColor: 'rgb(252,55,62)'
        },
        FTList: {
          barBackgroundColor: 'rgb(252,55,62)',
          labelColor: 'rgb(252,55,62)',
          activeLabelColor: 'rgb(252,55,62)',
          activeIcon: <Icon size={24} color="#FFF" name="newsstand" />
        }
      }
    }
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none'
});
