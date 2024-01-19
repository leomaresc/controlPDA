import { useState } from "react";
import { View, Button, Text, StyleSheet, Pressable } from "react-native";
import grocers from "../../grocers";

const styles = StyleSheet.create ({
    view: {
        alignSelf: "flex-start",
        flex: 0,
        flexDirection: "row",
        margin: "5%"
    },
    buttonAdd: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
        marginRight: "5%",
    },
    buttonRm:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
        marginRight: "5%",
    },
    text: {
        marginRight: "5%",
        color: "white"
    }
});
const test = grocers;

const Grocer = props => {
    const [count, setCount] = useState(0);
    
    return(
        <View style={styles.view}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{count}</Text>
            <Pressable style={styles.buttonAdd} title="+" onPress={() => {
                setCount(count + 1);
                test[props.index].name = props.name;
                test[props.index].counter = count+1;
                console.log(test)
                }}>
                <Text style={styles.text}>+</Text>
            </Pressable>
            <Pressable style={styles.buttonRm} title="-" onPress={() => {
                setCount(count - 1)
                test[props.index].name = props.name;
                test[props.index].counter = count-1;
                console.log(test)
                }}>
                <Text style={styles.text}>-</Text>
            </Pressable>
        </View>
    );
};

export {test}
export default Grocer;