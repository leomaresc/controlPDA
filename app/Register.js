import { View, Button, TextInput, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form"

export default function Register () {

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
        <View style={{flex: 1, flexDirection: "column", alignContent: "center", justifyContent: "center"}}>
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

            {errors.firstName && <Text>This is required.</Text>}

            </View>

            <View style={{flex: 0, flexDirection: "row"}}>
            <Text>Constraseña: </Text>
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

            <View style={{width: "100%", flex: 0, flexDirection: "row", justifyContent: "space-evenly", marginTop: "10%"}}>
                <Button title="Cancelar" color={"red"} onPress={() => navigation.navigate('Login')}/>
                <Button title="Registrarse" />
            </View>
        </View>
    )
}