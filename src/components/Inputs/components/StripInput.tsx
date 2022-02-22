import React from 'react';
import {View, StyleSheet, TextInput, KeyboardType} from 'react-native';
import {Colors} from '../../../styles';
import {MediumText} from '../../Texts';

interface IProps {
  viewStyles?: any;
  textStyles?: any;
  title: string;
  keyboard?: KeyboardType;
  placeholder: string;
  inputStyles?: any;
  onChangeText: any;
  value: string;
}

const StripInput = (props: IProps) => {
  return (
    <View style={{...styles.inputContainer, ...props.viewStyles}}>
      <MediumText style={{...styles.text, ...props.textStyles}}>
        {props.title}
      </MediumText>
      <TextInput
        keyboardType={props.keyboard}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.dullColor}
        style={{...styles.input, ...props.inputStyles}}
        onChangeText={props.onChangeText}
        value={props.value}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 15,
  },
  inputContainer: {
    borderColor: Colors.borderColor,
    borderBottomWidth: 0.5,
    minHeight: 80,
    justifyContent: 'center',
  },
  input: {
    minHeight: 40,
    marginLeft: 20,
    color: Colors.brightColor,
    fontSize: 20,
    marginBottom: 15,
    marginRight: 10,
    marginTop: 5,
  },
});

export default StripInput;
