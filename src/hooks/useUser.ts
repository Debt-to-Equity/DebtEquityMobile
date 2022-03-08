import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useUser = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser();
    }, []);

    const saveUser = async (newUser: {}) => {
        try {
            const jsonValue = JSON.stringify(newUser);
            await AsyncStorage.setItem('user', jsonValue);
            return setUser(user);
        } catch (e) {
            // saving error
        };
    };

    const getUser = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            return jsonValue != null ? setUser(JSON.parse(jsonValue)) : null;
        } catch (e) {
            // error reading value
        };
    };

    const deleteUser = async () => {
        try {
            await AsyncStorage.removeItem('user');
            return setUser({});
        } catch (e) {
            // saving error
        };
    };

    return { user, deleteUser, getUser, saveUser };
};