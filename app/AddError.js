import { Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { rutasLista, categorias, error } from '../rutas';

export default function AddError({route, navigate}){

    const [selected, setSelected] = useState("")
    const [ user ] = [route.params]

    return(
        <View>
            <Text>Agregar error a {user.name}</Text>

            <Text>Selecciona ruta: </Text>
            <SelectList setSelected={(x) => setSelected(x)} data={rutasLista} save="ruta"/>
            <Text>Categoría: </Text>
            <SelectList data={categorias}/>
            <Text>Tipo de error: </Text>
            <SelectList data={error}/>
            <Text>Observaciones: </Text>
            <TextInput style={{borderWidth: 5, borderColor: "Black"}} />
        </View>
    )
}