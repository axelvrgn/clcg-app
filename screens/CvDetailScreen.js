import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


const CvDetailScreen = ({route}) => {

    const {data} = route.params;

    return (
        
        <WebView 
        style={styles.container}
        originWhitelist={['*']}
        source={{uri: data}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        />
        
    )
    
}

export default CvDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    }

})