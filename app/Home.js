import { View, Text, ScrollView, ScrollViewComponent, StyleSheet} from "react-native"
import { useState, useEffect } from "react"
import { useIsFocused } from "@react-navigation/native";
import Buttons from "../src/components/buttons"
import Grocer from "../src/components/grocer"
import grocers from "../grocers"
import getCurrentDate from "../utils/getCurrentDate"

export default function Home({route, navigate}){


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const isFocused = useIsFocused();

    const updateData = () => {
        fetch(`https://calm-scarcely-hedgehog.ngrok-free.app/getErrorsByDate?fecha=${getCurrentDate()}`)
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }


    useEffect(() => {
        console.log("called")
        // Call only when screen open or when back on screen 
        if(isFocused){ 
            updateData();
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
            backgroundColor: "white",
        },
        shadowBox: {
            borderRadius: 16,
            backgroundColor: 'transparent',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
        },
        box: {
            backgroundColor: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
        },
    })


    return (
        <View className="home" style={styles.body}>
            <View style={styles.shadowBox}>
                <ScrollView style={styles.box}>
                    {grocers.map((x, index) => {
                        return <Grocer counter={counter(x.name)} key={x.key} index={index} name={x.name} />
                    })}
                </ScrollView>
            </View>

            <Buttons />
        </View>
    )
}

