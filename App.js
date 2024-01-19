import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Buttons from './src/components/buttons';
import Grocer from './src/components/grocer';
import grocers from './grocers';

// Mantiene el splash visible mientras se buscan los recursos.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-cargar fuentes, hacer llamadas de API aquí.
        await Font.loadAsync(Entypo.font); // Ejemplo de llamada a una fuente.

        // Esta función retrasa de manera artificial el inicio de la aplicación
        // para simular una carga lenta. Remover esto en build final.
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Indica a la aplicación a renderizar.
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View className="home"
      style={{ flex: 5,flexDirection: "column", alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#A4B9DB"}}
      onLayout={onLayoutRootView}>
      <View style={{borderColor: "black", borderWidth: 3, marginTop: "15%", marginRight: "30%"}}>
        {grocers.map((x, index) => {
          return <Grocer key={x.key} index={index} name={x.name} />
        })}
      </View>
      <Buttons />
    </View>
  );
}