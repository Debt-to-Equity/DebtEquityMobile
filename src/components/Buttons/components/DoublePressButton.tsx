import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {BrightText, DullText} from '../../../styles';

interface IProps {
  pressed: boolean;
  text: string;
  children: any;
}

const DoublePressButton = (props: IProps) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={props.pressed ? styles.pressedButton : styles.button}>
      {props.pressed ? (
        <DullText style={styles.text}>{props.text}</DullText>
      ) : (
        <BrightText style={styles.text}>{props.text}</BrightText>
      )}
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pressedButton: {
    width: 300,
    backgroundColor: 'rgba(0,173,245, .6)',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    flexDirection: 'row',
  },
  button: {
    width: 300,
    backgroundColor: '#00adf5',
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    flexDirection: 'row',
  },
  text: {
    fontSize: 22,
  },
});

export default DoublePressButton;
