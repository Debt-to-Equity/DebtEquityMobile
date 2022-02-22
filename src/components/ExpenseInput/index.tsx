import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Switch } from 'react-native-paper'
import { IWizardObj } from '../../types'

interface ExpenseInputProps {
    expense: IWizardObj
    indx: number;
    handleTextChange: any;
}

const ExpenseInput: React.FC<ExpenseInputProps> = ({ expense, indx, handleTextChange }) => {
    return (
        <View>
            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                onChangeText={text => handleTextChange(expense.name, text, indx)}
                label={expense.name}
                value={expense.value}
                keyboardType='number-pad'
            />
            <Switch value={expense.debtId ? true : false} onValueChange={onToggleSwitch} />;
        </View>
    )
}

export default ExpenseInput