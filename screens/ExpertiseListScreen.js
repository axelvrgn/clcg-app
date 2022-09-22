import React from "react";

import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Divider, ListItem } from "@rneui/themed";

const ExpertiseListScreen = ({navigation}) => {
    
    const categoriesList = [
        'PMO',
        'PO',
        'AMOA',
        'Consultant fonctionnel',
        'Chef de projet / directeur de projet',
    ];

    const categoriesDASList = [
        'Data Engineer',
        'MDM / Data Quality',
        'Dev BlockChain / NFT',
        'Data Scientist / IA',
        'BI',
    ];

    const [expanded, setExpanded] = React.useState(false);

    return (
        <SafeAreaView>
            <Text style={styles.title}>Nos domaines d'expertise</Text>
            {categoriesList.map((cat, i) => (
                <TouchableOpacity onPress={() => navigation.navigate("cvlist", {categorie: cat})}>
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{cat}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </TouchableOpacity>
                
                ))}
                <ListItem.Accordion
                content={ 
                <>
                    <ListItem.Content>
                    <ListItem.Title>Data as a service</ListItem.Title>
                    </ListItem.Content>
                </>
                }
                isExpanded={expanded}
                onPress={() => {
                setExpanded(!expanded);
                }}
            >
                {categoriesDASList.map((catdas, i) => (
                <TouchableOpacity onPress={() => navigation.navigate("cvlist", {categorie: catdas})}>
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                        <ListItem.Title>{catdas}</ListItem.Title>

                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </TouchableOpacity>
                ))}
            </ListItem.Accordion>           
        </SafeAreaView>
    )


}

export default ExpertiseListScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        //color: 'white',
        //backgroundColor: 'rgb(86,178,128)',
        color: 'rgb(24,45,78)',
    }
});
