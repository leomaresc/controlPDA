import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useEffect, useState } from 'react';
import Button from '../src/components/Button'
import { Calendar } from 'react-native-calendars';
import getCurrentDate from '../utils/getCurrentDate';  

export default function ErrorScreen({ route, navigation }){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [calendarShow, setCalendarShow] = useState(false)
    const [selected, setSelected] = useState(getCurrentDate());

    const styles = StyleSheet.create ({
        error: {
            width: 300,
            height: 50,
            marginTop: "5%",
            flex: 0,
            flexDirection: "row",
            borderRadius: 10,
            backgroundColor: "#ffd8d8",
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
        ruta: {
            width: "10%",
            marginRight: 10,
            marginLeft: 10,
        },
        nombre: {
            width: "30%"
        },
        supervisor: {
            width: "60%",
            marginLeft: 90
        },
    })

    const updateData = () => {
        fetch(`http://10.101.46.136:3000/getErrorsByDate?fecha=${selected}`)
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
                updateData();
                setCalendarShow(false)
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
                        <TouchableHighlight onPress={()=> {
                            if(x.observacion != ""){
                                alert(x.observacion)
                            } else{
                                alert("Sin observaciones.")
                            }
                        }}>
                            <View style={styles.error} onTouchStart={console.log("hello")}>
                                <Text style={styles.ruta}>{x.ruta}</Text>
                                <Text style={styles.nombre}>{x.nombre}</Text>
                                <Text style={styles.supervisor}>{x.supervisor}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                } else if(user.name === "Todos los bodegueros"){
                    return (
                        <TouchableHighlight onPress={()=> {
                            if(x.observacion != ""){
                                alert(x.observacion)
                            } else{
                                alert("Sin observaciones.")
                            }
                        }}>
                            <View style={styles.error}>
                                <Text style={styles.ruta}>{x.ruta}</Text>
                                <Text style={styles.nombre}>{x.nombre}</Text>
                                <Text style={styles.supervisor}>{x.supervisor}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                }
            })}
        </View>
    )
}