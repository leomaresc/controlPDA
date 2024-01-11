import react from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';
  import Add from "./add";
  import Remove from "./remove";

  const Buttons = () => {
    return (
        <View style={{flex: 0, flexDirection: "row", justifyContent: "flex-start", margin: "10%"}}>
            <Add />
            <Remove />
        </View>
    );
  };

  export default Buttons;