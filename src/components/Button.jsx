import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Button(props) {

    const styles = StyleSheet.create({
        blueButton: {
            backgroundColor: props.buttonColor,
            borderRadius: 16,
            borderStyle: "solid",
            borderBottomWidth: 4,
            borderBottomColor: props.buttonBottomColor,
        }
    });

    return(
        <View>
            <TouchableOpacity style={styles.blueButton} onPress={() => {console.log("test")}}>
                <Text style={{color: props.textColor}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
};