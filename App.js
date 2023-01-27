import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home/Home'
import Profile from './screens/profile/Profile';

const FirstStack = createNativeStackNavigator();
const SecondStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="First">
          {() => (
            <FirstStack.Navigator>
              <FirstStack.Screen
                name="Home"
                component={Home}
              />
              <FirstStack.Screen name="Profile" component={Profile} />
            </FirstStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <SecondStack.Navigator>
              <SecondStack.Screen name="Profile" component={Profile} />
              <SecondStack.Screen
                name="Home"
                component={Home}
              />
            </SecondStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
});
