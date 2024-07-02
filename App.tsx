/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {RegisterPage} from './screen/register';
import {MerchantDetails} from './screen/merchantsOrder';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Tab = createMaterialBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Merchant"
          style={{backgroundColor: '#fff'}}>
          <Tab.Screen
            name="Register"
            component={RegisterPage}
            options={{
              tabBarLabel: 'Register',
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./screen/assets/regiterLogo.jpg')}
                  style={{width: 40, height: 40}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Merchant"
            component={MerchantDetails}
            options={{
              tabBarLabel: 'Merchant',
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./screen/assets/merchatsLogo.png')}
                  style={{width: 40, height: 40}}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
