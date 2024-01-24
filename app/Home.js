import { View, Text} from "react-native"
import Buttons from "../src/components/buttons"
import Grocer from "../src/components/grocer"
import grocers from "../grocers"

export default function Home({route, navigate}){

    return (
        <View className="home" style={{ flex: 5,flexDirection: "column", alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#A4B9DB"}}>
            <View style={{marginTop: "10%"}}>
            {grocers.map((x, index) => {
                return <Grocer key={x.key} index={index} name={x.name} />
            })}
            </View>
            <Buttons />
        </View>
    )
}

