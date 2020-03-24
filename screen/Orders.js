import React from 'react';
import {View,Text,StyleSheet,ScrollView,Button} from 'react-native';

const Orders = props => {
    var uid = props.navigation.getParam('uid');
    var time = props.navigation.getParam('time');
    return(
        <View style={styles.container}>
                        <View style={{flexDirection:'row'}}>
                        <Text>{uid}</Text>
                        <Text>{time}</Text>
                        </View>  
                        <Button title="Back"  onPress={() =>{
                         props.navigation.navigate({routeName:'DashboardScreen'})
                        } } />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
});

export default Orders;