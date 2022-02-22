import React from 'react';
import { Text, useColorScheme } from 'react-native';
import { IText } from '../../types';
import { Colors } from '../../styles';

const isDarkMode = false;

export const BrightText = (props: IText) => {
    return (
        <Text
            style={{
                fontFamily: 'Arial',
                color: Colors.brightColor,
                ...props.style,
            }}>
            {props.children}
        </Text>
    );
};
export const MediumText = (props: IText) => {
    return (
        <Text
            style={{
                fontFamily: 'Arial',
                color: Colors.mediumColor,
                ...props.style,
            }}>
            {props.children}
        </Text>
    );
};
export const DullText = (props: IText) => {
    return (
        <Text
            style={{
                fontFamily: 'Arial',
                color: Colors.dullColor,
                ...props.style,
            }}>
            {props.children}
        </Text>
    );
};

