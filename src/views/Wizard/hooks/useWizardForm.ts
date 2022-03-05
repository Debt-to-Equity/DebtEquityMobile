import { useEffect, useState } from 'react'

interface Value {
    name: string;
    value: string;
}

export const useWizardForm = (defaultValues: Value[]) => {
    const [values, setValues] = useState(defaultValues)
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        checkForm()
    }, [values])

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

    const checkForm = () => {
        console.log('hello')
        let formCheck = true;
        values.map(val => {
            console.log('helo')
            if (val.value === '') formCheck = false;
        })

        setIsValid(formCheck);
    }

    return [values, insertValue, updateValues, deleteValue, isValid]
}