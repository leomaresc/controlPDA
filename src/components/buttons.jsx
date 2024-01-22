import React from 'react';
import {
    View,
  } from 'react-native';
  import Add from "./add";
  import Remove from "./remove";
  import Export from "./export";
import Button from './Button';

  const Buttons = () => {
    return (
        <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <Export />
            <Add />
            <Remove />
            <Button text="Amo a Andrea y a Mia" textColor="white" buttonColor="#1899D6" borderBottomColor="#1029D6"/>
        </View>
    );
  };

  export default Buttons;