import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Icon from '../../Icons';

interface IProps {
  onPress: any;
  containerStyles?: any;
  size: number;
  color: string;
}

const CloseButton = (props: IProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{...styles.container, ...props.containerStyles}}>
      <Icon iconType="close" size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
});

export default CloseButton;
