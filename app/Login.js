import { Text, View, TextInput, Button, Alert } from "react-native"
import { useEffect, useState, createContext } from "react";
import { useForm, Controller } from "react-hook-form"
import { useNavigation } from '@react-navigation/native';
import App from "./App";

let currentUser;
export { currentUser }

export default function Login({ updateLoggedInStatus }) {

    const navigation = useNavigation();

    const handleLogin = () => {
        currentUser = getValues("username")
        console.log(currentUser)
        updateLoggedInStatus(true); // Esto actualizará el estado en App.js
        navigation.navigate('Home');
      };

    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
      } = useForm({
        defaultValues: {
          username: "",
          password: "",
        },
      })
    
    const onSubmit = (data) => console.log(data)

    return (
        <View style={{flex: 1, flexDirection: "column", alignContent: "center"}}>
            <View style={{flex: 0, height: "20%", justifyContent: "space-around"}}>

            <View style={{flex: 0, flexDirection: "row"}}>
            <Text>Usuario: </Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={{borderWidth: 1, borderColor: "black", width: "70%"}}
                        placeholder="Nombre de usuario"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="username"
            />
            </View>

            {errors.firstName && <Text>This is required.</Text>}

            <View style={{flex: 0, flexDirection: "row"}}>
            <Text>Contraseña: </Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={{borderWidth: 1, borderColor: "black", width: "70%"}}
                        placeholder="Contraseña"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            </View>

            </View>

            <View style={{width: "80%",flex: 0, flexDirection: "row", justifyContent: "space-evenly", alignSelf: "center", margin: "10%"}}>
                <Button color={"orange"} title="Registrarse" onPress={() => navigation.navigate('Register')} />
                <Button color={"green"} title="Iniciar sesión" onPress={()=> {
                    handleSubmit(onSubmit)
                    fetch(`https://calm-scarcely-hedgehog.ngrok-free.app/login`, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: getValues("username"),
                            password: getValues("password")
                        }),
                    })
                    .then(response => response.json())
                    .then(json => {
                        if(json = true){
                            handleLogin();
                        } else{
                            console.log("A donde tú vas")
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
                }} />
            </View>
        </View>
    )
}