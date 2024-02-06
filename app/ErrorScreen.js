import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Button from '../src/components/Button'
import { Calendar } from 'react-native-calendars';
import getCurrentDate from '../utils/getCurrentDate';  

export default function ErrorScreen({ route, navigation }){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [calendarShow, setCalendarShow] = useState(false)

    let selectedDate = getCurrentDate()

    useEffect(() => {
        fetch(`http://10.101.46.136:3000/getErrorsByDate?fecha=${selectedDate}`)
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    const [ user ] = [route.params]

    function showCalendar(show){
        if(!show){
            return null
        }else{
        return (
                <Calendar style={{alignSelf: "center", width: 300}} onDayPress={() => {setTimeout(() => {
                    setCalendarShow(false)
                }, 300);}}/>
        )
        }
    }

    return(
        <View style={{ justifyContent: "center", alignItems: "center", flex: 0}}>
            <Button text={selectedDate} textColor="black" buttonColor="white" width="140" height="30" buttonFunction={() => {
                setCalendarShow(true)
            }}/>
            {showCalendar(calendarShow)}
            <Text>Errores de: {user.name}</Text>
            {data.forEach(element => {
                return <Text>{element.nombre}</Text>
            })}
        </View>
    )
}