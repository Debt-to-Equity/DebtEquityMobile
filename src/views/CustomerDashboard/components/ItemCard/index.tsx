import React from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import Card from '../../../../components/Card';
import PieChartComp from '../../../../components/PieChart';
import {BrightText} from '../../../../components/Texts';
import {combineCategoryAndActual} from '../../../../functions/combine';
import {IActual, IPlanned} from '../../../../types';
import {Button} from '../../../../components/Buttons';
import {NavigationRouteContext} from '@react-navigation/core';

interface ItemCardProps {
  header: string;
  data: IPlanned[];
  comparibleData: IActual[];
  dataTotal: number;
  comparibleDataTotal: number;
  onInsertPress: any;
  navigation: any;
}

const ItemCard: React.FC<ItemCardProps> = ({
  header,
  data,
  comparibleData,
  dataTotal,
  comparibleDataTotal,
  onInsertPress,
  navigation,
}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.headerContainer}>
        <BrightText style={styles.header}>{header}</BrightText>
      </View>
      <Button text={`Insert ${header}`} onPress={onInsertPress} />
      <View style={{alignItems: 'center', paddingBottom: 10}}>
        <BrightText
          style={
            styles.text
          }>{`Estimated: $${dataTotal} vs Actual: $${comparibleDataTotal}`}</BrightText>
      </View>
      <View style={{flexDirection: 'row'}}>
        <PieChartComp
          data={data
            .filter(value => value.number > 0)
            .map((value, index) => ({
              value: value.number,
              svg: {
                fill: value.color,
                onPress: () => {},
              },
              name: value.name,
              key: `pie-${index}`,
            }))}
        />
        <PieChartComp
          data={combineCategoryAndActual(data, comparibleData)
            .filter(value => value.number > 0)
            .map((value, index: number) => ({
              value: value.number,
              svg: {
                fill: value.color,
                onPress: () =>
                  navigation.navigate('TransactionView', {
                    transactions: value.extraData,
                  }),
              },
              name: value.name,
              key: `pie-${index}`,
            }))}
        />
      </View>
    </Card>
  );
};

export default ItemCard;

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
  text: {
    fontSize: 20,
  },
});
