import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BrightText, MediumText, Colors} from '../../../styles';
import Icon from '../../Icons';
import {CloseButton, IconButton} from '../index';
import {IIcons} from '../../../types';

interface IProps extends IIcons {
  onMainButtonPress: any;
  header: string;
  displayBrightText: boolean;
  brightText: string | undefined;
  onClosePress: any;
}

const StripFileButton = (props: IProps) => {
  return (
    <TouchableOpacity
      style={{...styles.inputContainer, borderTopWidth: 0}}
      onPress={props.onMainButtonPress}>
      <View>
        <MediumText style={{...styles.headerText}}>{props.header}</MediumText>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Icon
            iconType={props.iconType}
            color={Colors.mediumColor}
            size={20}
          />
          {props.displayBrightText ? (
            <>
              <BrightText style={{marginLeft: 10, marginRight: 10}}>
                {props.brightText}
              </BrightText>
              <IconButton
                iconType="close"
                onPress={props.onClosePress}
                size={30}
                color={Colors.dullColor}
              />
            </>
          ) : null}
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

export default StripFileButton;
