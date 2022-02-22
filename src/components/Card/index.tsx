import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

interface CardProps {
  children: any;
  style?: any;
  onPress?: any;
  isUsable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  isUsable,
}) => {
  return (
    <TouchableOpacity
      disabled={!isUsable}
      style={{...styles.card, ...style}}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
