import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function ErrorScreen({ route, navigation }){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://localhost:3000/')
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    const [ user ] = [route.params]
    console.log(user.name)

    return(
        <View>
            <Text>Ver todos los errores de {user.name}</Text>
        </View>
    )
}