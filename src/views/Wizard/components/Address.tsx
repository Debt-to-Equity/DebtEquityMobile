import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const Address = () => {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postalCode: '',
        state: ''
    })

    // useEffect(() => {
    //     let home = axios.get('http://www.zillow.com/webservice/GetSearchResults.htm', {
    //         params: {
    //             zwsid: 'X1-ZWz16fvwmnj9cb_3xvfc',
    //             address: '329 n 680 e',
    //             citystatezip: 'vineyard, Utah 84059',
    //             rentzestimate: true
    //         }
    //     }).then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, [address])

    return (
        <View style={{ paddingTop: 100 }}>
            <Text style={styles.headerText}>The value of your home is:</Text>
            <Text style={styles.valueText}>$546,367</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20
    },
    valueText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default Address