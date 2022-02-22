import { useEffect, useState } from 'react';

export const useForm = (defaultValues: any) => {
    const [form, setForm] = useState(defaultValues)
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        checkForm()
    }, [form])

    const editForm = (key: string, value: string) => {
        setForm({ ...form, [key]: value })
    }

    const updateObject = (newValue: {}) => {
        setForm(newValue)
    }

    const checkForm = () => {
        let formCheck = false;
        if (!form) return false;
        for (let f in form) {
            if (!form[f]) {
                console.log('hello')
                formCheck = false;
                break;
            }
            formCheck = true
        }
        console.log('in function', isValid)
        setIsValid(formCheck);
    }

    console.log(isValid)
    return [form, editForm, updateObject, isValid]
}