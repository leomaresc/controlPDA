import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Home from './Home';
import AddError from './AddError';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='AddError'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Error" component={AddError} options={{ title: 'Agregar error'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export {Stack};