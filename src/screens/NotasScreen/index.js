import React, {component} from 'react';
import {Text, View} from 'react-native';
import basicStyles from "../../styles/basicStyle";

export default class NotesScreen extends component{
    render(){
        return(
            <View style={basicStyles.container}>
                <Text>Notas </Text>
            </View>
        )
    }
}