import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Home from './Home';
import AddError from './AddError';
import ErrorScreen from './ErrorScreen';
import Login from './Login';
import Register from './Register'

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddError" component={AddError} options={{ title: 'Agregar error'}} />
          <Stack.Screen name="ErrorScreen" component={ErrorScreen} options={{title: 'Todos los errores'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}