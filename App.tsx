import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView className='flex-1'>
    <NavigationContainer >
          <stack.Navigator >
            <stack.Screen name='Home' component={HomeScreen}></stack.Screen>
          </stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
  );
}

