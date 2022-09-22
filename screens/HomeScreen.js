import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/themed';


const HomeScreen = ({navigation}) => {
    return (
       
        <SafeAreaView style={styles.containerHome}>
            <View style={styles.header}>
                <Image style={styles.companyLogo} source={require('../assets/logo2.png')}/>
                <Text style={styles.textCenter}>Business Consulting 3.0 - Data - Product Owners & Chefs de projet</Text>
            </View>
            <View style={styles.bottom}>
                <Button rounded title="Commencer" buttonStyle={{width: 300, height: 70, backgroundColor: 'rgb(86,179,128)', borderRadius: 5,}} titleStyle={{ fontWeight: 'bold', fontSize: 23 }} onPress={() => navigation.navigate("about")} ></Button>
            </View>
        </SafeAreaView>
    
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    header: {
        height: '50%',
        paddingTop: 80,
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',

    },
    companyLogo:{
        width: 380,
        height: 200,
    },
    textCenter: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(24,45,78)'
    },
    bottom: {
        height: '50%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 20,
        justifyContent: 'flex-end',
    },
})