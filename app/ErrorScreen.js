import { Text, View } from 'react-native';

export default function ErrorScreen({ route, navigation }){

    const [ user ] = [route.params]
    console.log(user.name)

    return(
        <View>
            <Text>Ver todos los errores de {user.name}</Text>
        </View>
    )
}