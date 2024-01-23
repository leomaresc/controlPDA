import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import grocers from "../../grocers";
import Button from "./Button";
import AddError from "../../app/AddError";
import ErrorScreen from "../../app/ErrorScreen";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create ({
    view: {
        alignSelf: "flex-start",
        flex: 0,
        flexDirection: "row",
        marginLeft: "10%"
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
    const navigation = useNavigation();
    
    return(
        <View style={styles.view}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{count}</Text>
            <Button text="+" textColor="white" buttonColor="blue" width="70%" height="30" buttonFunction={() => {navigation.navigate('AddError', {name: props.name})}}/>
            <Button text="👁" textColor="black" buttonColor="yellow" width="80%" height="30" buttonFunction={() => navigation.navigate('ErrorScreen', {name: props.name})}/>
        </View>
    );
};

export {test}
export default Grocer;