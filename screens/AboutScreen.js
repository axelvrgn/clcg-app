import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';



const AboutScreen = () => {


    return(
        <SafeAreaView>
            <Text style={styles.title}>Qui sommes-nous ?</Text>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Clémence Consulting spécialisé dans la Data localisé entre Paris et Marrakech (Maroc) permet une approche
                    des plus innovantes. Nous proposons un business consultant ou PO ou AMOA en front chez le client à Paris, et une
                    équipe de consultants techniques hautement qualifiés en nearshore : Data engineer, Data scientist, dev BI, dev Blockchain, dev IA ...
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default AboutScreen;

const styles = StyleSheet.create({
    title: {
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold',
        //color: 'white',
        //backgroundColor: 'rgb(86,179,128)',
        textAlign: 'center',
        color: 'rgb(24,45,78)',
    },
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '90%',
    },
    text: {
        marginTop: 20,
        lineHeight: 30,
        fontSize: 19,
    }
})