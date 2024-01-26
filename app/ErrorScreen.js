import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function ErrorScreen({ route, navigation }){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://10.101.46.136:3000/getErrorsByDate?fecha=24-01-2024')
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    const [ user ] = [route.params]

    return(
        <View>
            <Text>Ver todos los errores de {user.name}</Text>
            {data.forEach(element => {
                return <Text>{element.nombre}</Text>
            })}
        </View>
    )
}