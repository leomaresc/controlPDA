import React, {useState} from 'react';
import {
    View,
    Button
  } from 'react-native';
import * as Clipboard from "expo-clipboard"
import grocers from '../../grocers';
import { test } from './grocer';

var data = test.map(function(item) {
    const result = item.name + item.counter
    console.log(typeof(result))
    return result;
  });

const Export = () =>{
    const [copiedText, setCopiedText] = useState('')
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(JSON.stringify(data));
    };

    return(
        <View style={{margin: "3%"}}>
            <Button title="Exportar datos" color="orange" onPress={() => {
                copyToClipboard()
            }}/>
        </View>
    ) 
  }

  export default Export;