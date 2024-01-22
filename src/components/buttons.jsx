import React from 'react';
import {
    View,
  } from 'react-native';
  import Add from "./add";
  import Remove from "./remove";
  import Export from "./export";

  const Buttons = () => {
    return (
        <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <Export />
            <Add />
            <Remove />
        </View>
    );
  };

  export default Buttons;