import react from "react";
import {
    View,
  } from 'react-native';
  import Add from "./add";
  import Remove from "./remove";
  import Export from "./export";

  const Buttons = () => {
    return (
        <View style={{flex: 0, flexDirection: "column", justifyContent: "flex-start", margin: "10%"}}>
            <Export />
            <Add />
            <Remove />
        </View>
    );
  };

  export default Buttons;