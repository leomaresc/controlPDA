import React, {useState} from 'react';
import {
    View,
    Button
  } from 'react-native';
import * as Clipboard from "expo-clipboard"
import { test } from './grocer';

const Export = () =>{
    const [copiedText, setCopiedText] = useState([])

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(JSON.stringify(copiedText));
    };

    var data = test.map(function(item) {
        const result = "Bodeguero: "+item.name + " "+ "Errores: "+item.counter
        return result;
      });

    return(
        <View style={{margin: "3%"}}>
            <Button title="Exportar datos" color="blue" onPress={() => {
                setCopiedText(data)
                copyToClipboard()
            }}/>
        </View>
    ) 
  }

  export default Export;