import React, { Component } from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = ({label}) =>{
    return(
        <View>
            <Text>{label}</Text>
            <TextInput  />
        </View>
    )
}

export  {Input};