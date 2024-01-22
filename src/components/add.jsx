import React from 'react';
import {
    Button,
    View,
    Text,
    Pressable,
  } from 'react-native';
import { Link } from 'expo-router';

const Add = () => {
  return (
    <View style={{margin: "3%"}}>
        <Pressable style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        marginRight: "5%",
    }}>
          <Text>Epa</Text>
        </Pressable>
    </View>
  );
};

export default Add;