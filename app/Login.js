import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { useEffect, useState, createContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import App from "../App";

let currentUser;
export { currentUser };

export default function Login({ updateLoggedInStatus }) {
  const navigation = useNavigation();

  const handleLogin = () => {
    currentUser = getValues("username");
    console.log(currentUser);
    updateLoggedInStatus(true); // Esto actualizará el estado en App.js
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
  });

  const onSubmit = (data) => console.log(data);

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "white",
    },
    bgImg: {
      height: "20%",
      width: "100%",
    },
    dataInput: {
      width: "90%",
      height: 450,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 10,
      margin: 15,
      flexDirection: "column",
      alignItems: "center",
    },
    credentials: {
      marginTop: 50,
    },
    inputBox: {
      marginTop: 30,
      width: 200,
      height: 40,
      borderWidth: 0.5,
      borderColor: "black",
      padding: 9,
      color: "#000000",
    },
    buttons: {
        width: "40%",
        flexDirection: "column",
        marginTop: 30,
    },
    footer: {
      height: "auto",
      alignItems: "center",
      marginTop: 50,
      opacity: 0.5,
      fontSize: 12
    }
  });

  return (
    <View style={styles.body}>
      <View style={styles.bgImg}>
        <Image
          source={require("../assets/loginBg.jpg")}
          style={{ height: 250 }}
        />
      </View>
      <View>
        <View style={styles.dataInput}>
          <Text style={{marginTop: 10, marginRight: "55%", width: "40%", fontSize: 20}}>Iniciar sesión</Text>
          <View style={styles.credentials}>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputBox}
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

            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputBox}
                    placeholder={"Contraseña"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={true}
                  />
                )}
                name="password"
              />
            </View>
          </View>

          <View style={styles.buttons}>
            <View style={{marginBottom: 30}}>
            </View>
            <Button
              color={"green"}
              title="Iniciar sesión"
              onPress={() => {
                handleSubmit(onSubmit);
                fetch(`https://calm-scarcely-hedgehog.ngrok-free.app/login`, {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({
                    username: getValues("username"),
                    password: getValues("password"),
                  }),
                })
                  .then((response) => response.json())
                  .then((json) => {
                    if ((json = true)) {
                      handleLogin();
                    } else {
                      console.log("A donde tú vas");
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}
            />
          </View>
        </View>
        <View style={styles.footer}>
              <Text style={styles.footer}>© Leomar Salazar 2023 - 2024</Text>
        </View>
      </View>
    </View>
  );
}
