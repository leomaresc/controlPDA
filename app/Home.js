import { View, Text} from "react-native"
import { useState, useEffect } from "react"
import Buttons from "../src/components/buttons"
import Grocer from "../src/components/grocer"
import grocers from "../grocers"
import getCurrentDate from "../utils/getCurrentDate"

export default function Home({route, navigate}){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const updateData = () => {
        fetch(`http://10.101.46.136:3000/getErrorsByDate?fecha=${getCurrentDate()}`)
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        updateData();
      }, []);

    function counter(name){
        let result = data.filter( x => x.nombre === name);
        return result.length;
    }


    return (
        <View className="home" style={{ flex: 5,flexDirection: "column", alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#A4B9DB"}}>
            <View style={{marginTop: "10%"}}>
            {grocers.map((x, index) => {
                return <Grocer counter={counter(x.name)} key={x.key} index={index} name={x.name} />
            })}
            </View>
            <Buttons />
        </View>
    )
}

