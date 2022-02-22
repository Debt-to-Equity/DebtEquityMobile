import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IIcons} from '../../../types';
import Icon from '../../Icons';

interface IProps extends IIcons {
  size: number;
  color: string;
  onPress: any;
  containerStyles?: any;
  iconStyles?: any;
  children?: any;
}

const IconButton = (props: IProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.containerStyles}>
      <Icon
        iconType={props.iconType}
        size={props.size}
        color={props.color}
        style={props.iconStyles}
      />
      {props.children}
    </TouchableOpacity>
  );
};

export default IconButton;
