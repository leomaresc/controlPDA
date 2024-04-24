import { View, Text, ScrollView, ScrollViewComponent, StyleSheet} from "react-native"
import { useState, useEffect } from "react"
import { useIsFocused } from "@react-navigation/native";
import Buttons from "../src/components/buttons"
import Grocer from "../src/components/grocer"
import getCurrentDate from "../utils/getCurrentDate"

export default function Home({route, navigate}){


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [grocers, setGrocers] = useState([]);

    const isFocused = useIsFocused();

    const updateData = () => {
        fetch(`https://calm-scarcely-hedgehog.ngrok-free.app/getErrorsByDate?fecha=${getCurrentDate()}`)
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    const updateGrocers = () => {
        fetch(`https://calm-scarcely-hedgehog.ngrok-free.app/getGrocers`)
            .then((resp) => resp.json())
            .then((json) => setGrocers(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        console.log("called")
        // Call only when screen open or when back on screen 
        if(isFocused){ 
            updateData();
            updateGrocers();
        }
    }, [ isFocused]);

    function counter(name){
        let result = data.filter( x => x.nombre === name);
        return result.length;
    }

    const styles = StyleSheet.create({
        body: {
            flex: 5,
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        box: {
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "15%",
            width: "90%",
            height: "80%",
            borderWidth: 0,
            borderColor: "black",
            backgroundColor: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            elevation: 5,
        },
    })


    return (
        <View className="home" style={styles.body}>
                <View style={styles.box}>
                    {grocers.map((x, index) => {
                        return <Grocer counter={counter(x.name)} key={x.key} index={index} name={x.name} />
                    })}
                </View>

            <Buttons />
        </View>
    )
}

