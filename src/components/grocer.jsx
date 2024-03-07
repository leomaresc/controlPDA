import { View, Text, StyleSheet } from "react-native";
import grocers from "../../grocers";
import Button from "./Button";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create ({
    view: {
        width: 300,
        marginTop: "5%",
        flex: 0,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#FFFFF5",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems: "center"
    },
    text: {
        width: "20%",
        marginLeft: 10,
        marginRight: 10,
    },
    counter: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 15,
        backgroundColor: "#f7f4f2",
        height: "90%",
        width: "15%",
        marginRight: 60,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
    }
});

const test = grocers;

const Grocer = props => {
    const navigation = useNavigation();

    return(
        <View style={styles.view}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.counter}>{props.counter}</Text>
            <Button text="+" textColor="white" buttonColor="#04AA6D" width="40%" height="30" buttonFunction={() => {navigation.navigate('AddError', {name: props.name})}}/>
            <Button text="👁" textColor="black" buttonColor="#008CBA" width="40%" height="30" buttonFunction={() => navigation.navigate('ErrorScreen', {name: props.name})}/>
        </View>
    );
};

export {test}
export default Grocer;