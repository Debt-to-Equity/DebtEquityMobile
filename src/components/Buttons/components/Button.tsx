import React from 'react';
import {TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../../../styles';
import {BrightText, DullText} from '../../Texts';

interface IProps {
  disabled?: boolean;
  loading?: boolean;
  onPress: any;
  buttonStyles?: any;
  textStyles?: any;
  text: string;
}

const Button = (props: IProps) => {
  return (
    <TouchableOpacity
      disabled={props.disabled || props.loading}
      onPress={props.onPress}
      style={
        props.disabled || props.loading
          ? {...styles.disabledButton, ...props.buttonStyles}
          : {...styles.button, ...props.buttonStyles}
      }>
      {props.disabled || props.loading ? (
        props.loading ? (
          <ActivityIndicator />
        ) : (
          <DullText style={{...styles.text, ...props.textStyles}}>
            {props.text}
          </DullText>
        )
      ) : (
        <BrightText style={{...styles.text, ...props.textStyles}}>
          {props.text}
        </BrightText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  disabledButton: {
    backgroundColor: Colors.disabledColor,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
});

export default Button;
