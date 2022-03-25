import { jsxAttribute } from "@babel/types";
import React, { useState } from "react";
import { TouchableOpacity, View, FlatList } from "react-native";
import {
  Button,
  Dialog,
  Divider,
  Portal,
  Searchbar,
  Surface,
  Text,
  Switch,
  TextInput,
} from "react-native-paper";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";
import Search from "../../../components/Search";
import { IDebt } from "../../../types";

interface AttachDebtDialogProps {
  isVisible: boolean;
  onCancel: any;
  debt: IDebt[];
  onSave: any;
}

const AttachDebtDialog: React.FC<AttachDebtDialogProps> = ({
  onSave,
  isVisible,
  onCancel,
  debt,
}) => {
  const [selectedDebtId, setSelectedDebtId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [yearsLeft, setYearsLeft] = useState("");
  const [isAmortized, setIsAmortized] = useState(true);

  return (
    <Portal>
      <Dialog
        visible={isVisible}
        onDismiss={onCancel}
        style={{ minHeight: 250, padding: 10 }}
      >
        <Search
          searchText={searchText}
          onChangeText={(text: string) => {
            setSearchText(text);
            setSelectedDebtId(null);
          }}
          onSelect={(item: IDebt) => {
            setSelectedDebtId(item.id);
            setSearchText(item.name);
          }}
          searchArray={debt
            .filter((ele) => ele.name.includes(searchText))
            .slice(0, 3)}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 15,
          }}
        >
          <Text style={{ paddingRight: 15, fontSize: 18 }}>Amortized?</Text>
          <Switch
            value={isAmortized}
            onValueChange={() => {
              setIsAmortized(!isAmortized);
            }}
          />
        </View>

        <TextInput
          style={{ width: 200 }}
          mode="outlined"
          label="Years Left"
          value={yearsLeft}
          onChangeText={(text) => setYearsLeft(text)}
          keyboardType="number-pad"
        />
        <TextInput
          style={{ width: 200 }}
          mode="outlined"
          label="Interest Rate"
          value={interestRate}
          onChangeText={(text) => setInterestRate(text)}
          keyboardType="number-pad"
        />

        <Dialog.Actions>
          <Button onPress={onCancel}>Cancel</Button>
          <Button
            onPress={() => {
              onSave(selectedDebtId, interestRate, isAmortized, yearsLeft);
              setSearchText("");
              setSelectedDebtId(null);
              setInterestRate("");
              setIsAmortized(true);
              setYearsLeft("");
            }}
          >
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AttachDebtDialog;
