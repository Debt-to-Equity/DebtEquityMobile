import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BrightText} from '../Texts';

interface YearsDisplayProps {
  time: string;
  header: string;
}

const YearsDisplay: React.FC<YearsDisplayProps> = ({time, header}) => {
  return (
    <View>
      <BrightText style={styles.text}>{header}</BrightText>
      <View style={styles.timeContainer}>
        <BrightText style={styles.text}>{time}</BrightText>
      </View>
    </View>
  );
};
export default YearsDisplay;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  timeContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
});
