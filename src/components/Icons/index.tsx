import React from 'react';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// @ts-ignore
import IonIcons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import { IIcons } from '../../types';

interface IProps extends IIcons {
  color: string;
  size: number;
  style?: any;
}

const Icon = (props: IProps) => {
  switch (props.iconType) {
    case 'logo':
      return (
        <FontAwesomeIcon
          name="pencil-ruler"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'paperclip':
      return (
        <MaterialCommunityIcon
          name="paperclip"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'close':
      return (
        <MaterialCommunityIcon
          name="close"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'eye':
      return (
        <IonIcons
          name="eye"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'eye-off':
      return (
        <IonIcons
          name="eye-off"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'account-circle':
      return (
        <MaterialCommunityIcon
          name="account-circle"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'key':
      return (
        <MaterialCommunityIcon
          name="key"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'left-chevron':
      return (
        <MaterialCommunityIcon
          name="chevron-left"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'calendar-blank':
      return (
        <MaterialCommunityIcon
          iconType="calendar-blank"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'card':
      return (
        <IonIcons
          name="card"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'plus-circle-outline':
      return (
        <MaterialCommunityIcon
          name="plus-circle-outline"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'chevron-down':
      return (
        <MaterialCommunityIcon
          name="chevron-down"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'chevron-up':
      return (
        <MaterialCommunityIcon
          name="chevron-up"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'video-call':
      return (
        <MaterialIcon
          name="video-call"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'search':
      return (
        <MaterialIcon
          name="search"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'channel':
      return (
        <MaterialIcon
          name="personal-video"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'dollar-sign':
      return (
        <MaterialIcon
          name="attach-money"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'settings':
      return (
        <MaterialIcon
          name="settings"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'question-mark':
      return (
        <MaterialIcon
          name="help-outline"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    case 'logout':
      return (
        <MaterialIcon
          name="logout"
          color={props.color}
          size={props.size}
          style={props.style}
        />
      );
    default:
      return null;
  }
};

export default Icon;
