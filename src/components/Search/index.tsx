import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Divider, Searchbar } from 'react-native-paper'

interface SearchProps {
    searchArray: any[];
    onSelect: any;
    onChangeText: any;
    searchText: string;
}

const Search: React.FC<SearchProps> = ({ searchArray, onSelect, onChangeText, searchText }) => {
    return (
        <View style={{ paddingVertical: 10 }}>
            <Searchbar
                placeholder="Search"
                onChangeText={(text) => onChangeText(text)}
                value={searchText}
            />
            <FlatList
                style={{ minHeight: 150 }}
                data={searchArray}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity
                            style={{
                                padding: 8,
                                height: 40,
                                // width: 80,
                                alignItems: 'center',
                                justifyContent: 'center'

                            }}
                            onPress={() => onSelect(item)}
                        >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                        <Divider />
                    </>
                )}
            />
        </View>
    )
}

export default Search