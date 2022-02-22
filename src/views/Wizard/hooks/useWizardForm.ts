import { useState } from 'react'

interface Value {
    name: string;
    value: string;
}

export const useWizardForm = (defaultValues: Value[]) => {
    const [values, setValues] = useState(defaultValues)

    const insertValue = (newValue: Value) => {
        setValues([...values, newValue])
    }

    const updateValues = (update: Value, indx: number) => {
        let newArr = values
        newArr[indx] = update
        setValues(newArr)
    }

    const deleteValue = (indx: number) => {
        let newArr = values
        newArr.splice(indx, 1)
        setValues(newArr)
    }

    const valuesValid = () => {
        let isValid = true;
        values.map(val => {
            if (val.value === '') isValid = false;
        })
        return isValid
    }

    return [values, insertValue, updateValues, deleteValue, valuesValid]
}