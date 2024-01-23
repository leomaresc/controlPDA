import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Button(props) {

    const styles = StyleSheet.create({
        blueButton: {
            flex: 0,
            justifyContent: "center",
            backgroundColor: props.buttonColor,
            borderRadius: 4,
            borderStyle: "solid",
            width: parseInt(props.width),
            height: parseInt(props.height),
            textAlign: "center",
            shadowColor: "#000",
            shadowOffset: {
	            width: 0,
	            height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            margin: 5,
        },
        buttonText: {
            textAlign: "center",
            color: props.textColor,
        }
    });

    return(
        <View>
            <TouchableOpacity style={styles.blueButton} onPress={props.buttonFunction}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
};