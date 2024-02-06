import { Text, View, TextInput, Button, Alert } from "react-native"
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form"
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
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
                        placeholder="First name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstName"
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
                        placeholder="Last name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="lastName"
            />
            </View>

            </View>

            <View style={{width: "80%",flex: 0, flexDirection: "row", justifyContent: "space-evenly", alignSelf: "center", margin: "10%"}}>
                <Button color={"orange"} title="Registrarse" onPress={() => navigation.navigate('Register')} />
                <Button color={"green"} title="Iniciar sesión" onPress={()=> {
                    handleSubmit(onSubmit)
                }} />
            </View>
        </View>
    )
}