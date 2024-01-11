import React from 'react';
import {
    View,
    Button
  } from 'react-native';
  import * as Clipboard from 'expo-clipboard';

  const Export = () =>{
        const [copiedText, setCopiedText] = React.useState(' ');
        const copyToClipboard = async () => {
        await Clipboard.setStringAsync(<Grocer />);
    };
    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    };

    return(
        <View style={{margin: "3%"}}>
            <Button title="Exportar datos" color="orange" onPress={()=>{console.log("testeo")}}/>
        </View>
    ) 
  }

  export default Export;