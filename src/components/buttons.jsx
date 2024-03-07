import React from 'react';
import { View, } from 'react-native';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

  const Buttons = () => {

    const navigation = useNavigation();

    return (
        <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginBottom: 20}}>
            <Button text="Ver todos los errores" textColor="black" buttonColor="#59D5E0" width="140" height="30" buttonFunction={() => navigation.navigate('ErrorScreen', {name: "Todos los bodegueros"})}/>
        </View>
    );
  };

  export default Buttons;