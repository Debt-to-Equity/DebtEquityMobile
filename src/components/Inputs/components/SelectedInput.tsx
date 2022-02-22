import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Animated } from 'react-native';
import { Colors } from '../../../styles';
import { BrightText } from '../../Texts'

interface IProps {
    onChangeText: (test: string) => any;
    containerStyles?: any;
    textStyles?: any;
    inputStyles?: any;
    placeholder: string;
    value: string;
    multiline?: boolean;
}

const SelectedInput = (props: IProps) => {
    const [isSelected, setSelected] = useState<boolean>(false);

    return (
        <View
            style={
                !isSelected
                    ? { ...styles.containerStyles, ...props.containerStyles }
                    : {
                        ...styles.containerStyles,
                        ...styles.selectedContainerStyles,
                        ...props.containerStyles,
                    }
            }>
            {
                isSelected ? (
                    <BrightText style={{
                        ...styles.textStyles, ...props.textStyles
                    }}>
                        {props.placeholder}
                    </BrightText>
                ) : null}
            <TextInput
                multiline={props.multiline}
                onFocus={() => setSelected(true)}
                onBlur={() => setSelected(false)}
                value={props.value}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                style={{ ...styles.inputStyles, ...props.inputStyles }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyles: {
        borderColor: Colors.borderColor,
        borderWidth: 1,
        height: 50,
        width: '100%',
        backgroundColor: Colors.backgroundColor,
        borderRadius: 6,
    },
    selectedContainerStyles: {
        borderColor: Colors.primaryColor,
        borderWidth: 2,
    },
    textStyles: {
        position: 'absolute',
        top: -10,
        left: 8,
        zIndex: 2,
        backgroundColor: Colors.backgroundColor,
        padding: 2,
        paddingTop: 0,
        color: Colors.primaryColor,
        fontSize: 17,
    },
    inputStyles: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
    },
});

export default SelectedInput;