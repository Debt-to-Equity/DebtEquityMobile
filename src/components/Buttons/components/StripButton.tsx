import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {BrightText, MediumText, DullText, Colors} from '../../../styles';

interface IProps {
  onPress: any;
  headerTextStyles?: any;
  header: string;
  displayBrightText: boolean;
  brightText: string;
  dullText: string;
  textStyles?: any;
}

const StripButton = (props: IProps) => {
  return (
    <TouchableOpacity
      style={{...styles.inputContainer}}
      onPress={props.onPress}>
      <View>
        <MediumText style={{...styles.headerText, ...props.headerTextStyles}}>
          {props.header}
        </MediumText>
        <View>
          {props.displayBrightText ? (
            <BrightText style={{...styles.text, ...props.textStyles}}>
              {props.brightText}
            </BrightText>
          ) : (
            <DullText style={{...styles.text, ...props.textStyles}}>
              {props.dullText}
            </DullText>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: Colors.borderColor,
    borderBottomWidth: 0.5,
    minHeight: 80,
    justifyContent: 'space-around',
    paddingLeft: 20,
  },
  headerText: {
    fontSize: 15,
    marginBottom: 10,
  },

  text: {
    fontSize: 20,
  },
});

export default StripButton;
