import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../../../../components/Card';
import { BrightText } from '../../../../components/Texts';
import YearsDisplay from '../../../../components/YearsDisplay';

interface CashFlowContainerProps {
  firstName: string;
  secondName: string;
  budget: any;
  revenue: any;
  firstTotal: number;
  secondTotal: number;
  time: string;
  header: string;
}

const CashFlowContainer: React.FC<CashFlowContainerProps> = ({
  firstName,
  secondName,
  budget,
  revenue,
  header,
  firstTotal,
  secondTotal,
  time,
}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.headerContainer}>
        <BrightText style={styles.header}>{header}</BrightText>
      </View>
      <YearsDisplay header="Debt Free In:" time={time} />
      <BrightText>
        Monthly {firstName}: {firstTotal}
      </BrightText>
      <BrightText>
        Monthly {secondName}: {secondTotal}
      </BrightText>

      <BrightText>Monthly Cash Flow: {secondTotal - firstTotal}</BrightText>
    </Card>
  );
};

export default CashFlowContainer;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
    paddingBottom: 5,
  },
  header: {
    fontSize: 25,
  },
});
