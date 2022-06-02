import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";

interface Props {
  navigation: any;
  route: any;
}

const AddNewItem: React.FC<Props> = ({ navigation, route }) => {
  const [item, setItem] = useState({ amount: "", name: "" });
  const addItem = route.params.addItem;

  const onAddItem = () => {
    navigation.goBack();
    addItem(item.name);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          style={{ width: "45%" }}
          onChangeText={(text) => setItem({ ...item, name: text })}
          placeholder="Add Name"
          value={item.name}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Button
          color="tomato"
          style={{ width: "45%" }}
          disabled={false}
          loading={false}
          onPress={() => navigation.goBack()}
          mode="contained"
        >
          Cancel
        </Button>
        <Button
          style={{ width: "45%" }}
          disabled={false}
          loading={false}
          onPress={() => onAddItem()}
          mode="contained"
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default AddNewItem;
