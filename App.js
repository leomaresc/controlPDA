import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 'expo-router/build/fork/getPathFromState';
import Login from './app/Login';
import Home from './app/Home';
import AddError from './app/AddError';
import ErrorScreen from './app/ErrorScreen';
import Register from './app/Register';
import { useContext, useState } from 'react';

const Stack = createNativeStackNavigator();
export default function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const updateLoggedInStatus = (status) => {
    setLoggedIn(status);
  };
  
  

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {isLoggedIn == true ? (
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="AddError" component={AddError} options={{ title: 'Agregar error'}} />
          <Stack.Screen name="ErrorScreen" component={ErrorScreen} options={{title: 'Todos los errores'}} />
        </Stack.Group>
        ) : (
        <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login">
              {(props) => <Login {...props} updateLoggedInStatus={updateLoggedInStatus}/>}
            </Stack.Screen>
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}