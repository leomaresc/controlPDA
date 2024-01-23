import { Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { rutasLista, categorias, error } from '../rutas';
import Button from '../src/components/Button';

export default function AddError({route, navigate}){

    const [ user ] = [route.params]
    const [selected, setSelected] = useState("")
    const [mistake, setMistake] = useState({})
    let updateMistake = {
        nombre: user.name,
        ruta: "",
        categoria: "",
        error: "",
        observaciones: ""
    }

    return(
        <View>
            <Text>Agregar error a {user.name}</Text>

            <Text>Selecciona ruta: </Text>

            <SelectList setSelected={(ruta) => {
                updateMistake.ruta = ruta;
                setMistake(updateMistake);
                setSelected(ruta);
                }} 
            data={rutasLista} save="ruta" search={false} placeholder='Seleccione ruta'/>

            <Text>Categoría: </Text>

            <SelectList setSelected={(categoria) => {
                updateMistake.categoria = categoria;
                setMistake(updateMistake);
                setSelected(categoria);
                }} 
            data={categorias} search={false} save='categoria' placeholder='Seleccione categoría de la ruta'/>

            <Text>Tipo de error: </Text>

            <SelectList setSelected={(error) => setSelected(error)} data={error} search={false} save='error' placeholder='Seleccione el tipo de error'/>
            <Text>Observaciones: </Text>
            <TextInput style={{borderWidth: 5, borderColor: "Black"}} placeholder='Agregue una observación (opcional)' />

            <Button text="Aceptar" textColor="white" buttonColor="#8CBED6" width="100%" height="100%" buttonFunction={()=> console.log(mistake)}/>
        </View>
    )
}