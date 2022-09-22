import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Test = ({navigation}) => {
    return (
        <View>
            <Text>Ici c'est le test</Text>
            <Button title="ici" onPress={() => navigation.navigate("about")}></Button>
        </View>
    );
}


export default Test;