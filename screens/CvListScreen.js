import * as React from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { ListItem, Avatar } from "@rneui/themed";

const CvListScreen = ({route, navigation}) => {

    const {categorie} = route.params;

    let CVlist = [
        {
            id: 1,
            name: 'Antoine',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png',
            categorie: 'AMOA',
            cvLink: '',
        },
        {
            id: 2,
            name: 'Sara',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png',
            categorie: 'PMO',
            cvLink: 'https://drive.google.com/file/d/1gAhXyRY_x-y8SFFjl1FJWY3jX8-Kqjpd/view?usp=sharing',
        },
        {
            id: 3,
            name: 'Paul',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png',
            categorie: 'PMO',
            cvLink: '',
        },
        {
            id: 4,
            name: 'Richard',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png',
            categorie: 'PO',
            cvLink: '',
        },
    ];

    if(categorie.length != 0){
        CVlist = CVlist.filter(function(item){
            return item.categorie == categorie;
        }).map(function({name, avatar, categorie, cvLink}){
            return {name, avatar, categorie, cvLink};
        });
    }

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("detail", {data: item.cvLink})}>
        <ListItem key={item.id} bottomDivider>
            <Avatar rounded source={{uri: item.avatar}}/>
            <ListItem.Content >
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.offre}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron/>
        </ListItem>
        </TouchableOpacity>
    );

    return (
            
        <SafeAreaView style={styles.container}>
            <Text style={styles.sectionTitle}>Nos profils {categorie}</Text>
           
            <FlatList
                style={styles.flatList}
                keyExtractor={item => item.id}//{(item, index) => index.toString()}
                data={CVlist}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
    
}

export default CvListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cvWrapper:{
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
        maxHeight: '100%',
        padding: 5
    },
    sectionTitle: {
        paddingBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 10,
        color: 'rgb(24,45,78)',
    },
    categorieContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 100,
        elevation: 1,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    categorie: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: 'rgb(24,45,78)',
        marginBottom: 5
    },
    items: {
        marginTop: 20,
    },
    
})