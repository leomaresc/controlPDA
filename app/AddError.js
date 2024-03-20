import { Text, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { rutasLista, categorias, error } from '../rutas';
import Button from '../src/components/Button';
import { useNavigation } from '@react-navigation/native';
import { currentUser } from './Login';
import getCurrentDate from '../utils/getCurrentDate';

export default function AddError({route, navigate}){
    console.log("El usuario: " + currentUser + " está agregando un error.")

    const navigation = useNavigation();
    const [ user ] = [route.params]
    const [value, onChangeText] = useState()
    const [selected, setSelected] = useState("")
    const [mistake, setMistake] = useState({nombre: user.name, ruta: "", categoria: "", error: "", observaciones: ""})
    return(
        <View>

            <Text>Agregar error a {user.name}</Text>

            <Text>Selecciona ruta: </Text>

            <SelectList setSelected={(ruta) => {setSelected(ruta);}} 
            onSelect={()=>{
                mistake.ruta = selected;
            }} 
            data={rutasLista} save="ruta" search={false} placeholder='Seleccione ruta'/>

            <Text>Categoría: </Text>

            <SelectList setSelected={(categoria) => {setSelected(categoria);}}
            onSelect={()=>{
                mistake.categoria = selected;
            }} 
            data={categorias} search={false} save='categoria' placeholder='Seleccione categoría de la ruta'/>

            <Text>Tipo de error: </Text>

            <SelectList setSelected={(error) => setSelected(error)} 
            onSelect={()=>{
                mistake.error = selected;
            }} 
            data={error} search={false} save='error' placeholder='Seleccione el tipo de error'/>

            <Text>Observaciones: </Text>

            <TextInput value={value} autoCapitalize='sentences' editable={true} multiline style={{borderWidth: 1, borderRadius: 5, borderColor: "#000000"}} placeholder='Agregue una observación (opcional)' onChangeText={text => {
                onChangeText(text);
                mistake.observaciones = text;
                }}/>

            <Button text="Aceptar" textColor="#ffffff" buttonColor="#8CBED6" width="100%" height="100%" buttonFunction={()=> {
                console.log(mistake)
                Alert.alert('Exito!', 'Los datos han sido cargados con exito.')
                fetch(`https://calm-scarcely-hedgehog.ngrok-free.app/postError`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        fecha: getCurrentDate(),
                        supervisor: currentUser,
                        ruta: mistake.ruta,
                        nombre: mistake.nombre,
                        categoria: mistake.categoria,
                        error: mistake.error,
                        observacion: mistake.observaciones,
                    }),
                })
                .then(response => response.json())
                .then(json => {
                    if(json = true){
                        console.log("Listo rey")
                    } else{
                        console.log("A donde tú vas")
                    }
                })
                .catch(error => {
                    console.error(error);
                });
                navigation.navigate('Home')
            }}/>
        </View>
    )
}