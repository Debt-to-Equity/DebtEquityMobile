import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Text } from "react-native-paper";
import { getPayoffSchedule } from "../../../../api/getPayoffSchedule";
import { UserContext } from "../../../../context/UserContext";

const PayoffScheduleCard = () => {
  const { user } = useContext(UserContext);
  const [payoff, setpayoff] = useState({
    months: 0,
    years: 0,
  });

  useEffect(() => {
    getPayoff();
  }, []);

  const getPayoff = async () => {
    let payoffTime = await getPayoffSchedule(user?.id);

    setpayoff(payoffTime);
  };

  const formatPayoff = () => {
    return `${payoff?.years} years and ${payoff.months} months`;
  };

  return (
    <Card style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{formatPayoff()}</Text>
      </View>
      {/* <Button onPress={onInsertPress}>Insert a Debt Payment</Button> */}
    </Card>
  );
};

export default PayoffScheduleCard;

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
  },
  headerContainer: {
    alignItems: "center",
    paddingBottom: 5,
  },
  card: {
    padding: 10,
    marginBottom: 20,
  },
});
