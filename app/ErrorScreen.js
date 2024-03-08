import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Button from '../src/components/Button'
import { Calendar } from 'react-native-calendars';
import getCurrentDate from '../utils/getCurrentDate';  

export default function ErrorScreen({ route, navigation }){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [calendarShow, setCalendarShow] = useState(false)
    const [selected, setSelected] = useState('');
    const [selectedDate, setSelectedDate] = useState(getCurrentDate())

    const styles = StyleSheet.create ({
        error: {
            width: 300,
            height: 50,
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
        }
    })

    const updateData = () => {
        fetch(`http://10.101.46.136:3000/getErrorsByDate?fecha=${selectedDate}`)
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        updateData();
      }, []);

    const [ user ] = [route.params]

    function showCalendar(show){
        if(!show){
            return null
        }else{
        return (
            <Calendar style={{alignSelf: "center", width: 300}} onDayPress={day => {
                setSelected(day.dateString)
                setSelectedDate(selected)
                setCalendarShow(false)
                updateData();
            }}/>
        )
        }
    }

    return(
        <View style={{ justifyContent: "center", alignItems: "center", flex: 0}}>
            <Button text={selected} textColor="black" buttonColor="white" width="140" height="30" buttonFunction={() => {
                setCalendarShow(true)
            }}/>
            {showCalendar(calendarShow)}
            <Text>Errores de: {user.name}</Text>
            {data.map((x) => {
                if(x.nombre === user.name){
                    return (
                        <View style={styles.error}>
                            <Text>{x.nombre}</Text>
                            <Text>{x.ruta}</Text>
                            <Text>{x.supervisor}</Text>
                        </View>
                    )
                } else if(user.name === "Todos los bodegueros"){
                    return (
                        <View style={styles.error}>
                            <Text>{x.nombre}</Text>
                            <Text>{x.ruta}</Text>
                            <Text>{x.supervisor}</Text>
                        </View>
                    )
                }
            })}
        </View>
    )
}