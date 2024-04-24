import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { MultiSelect } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";

let data = [];

fetch(`https://calm-scarcely-hedgehog.ngrok-free.app/getGrocers`)
  .then((resp) => resp.json())
  .then((json) => (rawData = json))
  .then((rawData) => {
    rawData.map((x) => {
      data.push({ label: x.name, value: x.key });
    });
  })
  .catch((error) => console.error(error));

export default function GrocersKPI() {
  const [selected, setSelected] = useState([]);
  const [grocers, setGrocers] = useState([]);

  const updateGrocers = () => {
    fetch(`https://calm-scarcely-hedgehog.ngrok-free.app/getGrocers`)
      .then((resp) => resp.json())
      .then((json) => setGrocers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <AntDesign style={styles.icon} color="black" name="adduser" size={20} />
      </View>
    );
  };

  useEffect(() => {
    fetch("https://calm-scarcely-hedgehog.ngrok-free.app/getKpi", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bodegueros: selected,
        }),
      });
}, [selected]);

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="label"
        placeholder="Seleccionar bodegueros"
        value={selected}
        onChange={(item) => {
          setSelected(item);
          console.log(item);

        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="user" size={20} />
        )}
        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item) }>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
              <AntDesign color="black" name="deleteuser" size={17} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginTop: "8%" },
  dropdown: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});
