import React, { Component,useState } from 'react';
import {View,Text,StyleSheet, Button, Alert} from 'react-native';

let count = 0;

const submit = (foodItem,price,cu,uid) =>{
    count++;

    fetch('https://canteenapp-5bba5.firebaseio.com/order.json',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
            Food_Item:foodItem,
            Price:price,
            Booked_by:cu,
            Uid:uid
        })
    })
};

const BookOrder = props =>  {

    const[foodItem,setFoodItem] = useState('');
    const[price,SetPrice] = useState(0);

    var c1 = props.navigation.getParam('count1');
    var c2 = props.navigation.getParam('count2');
    var c3 = props.navigation.getParam('count3');

    var cu = props.navigation.getParam('currentUser');
    var uid = props.navigation.getParam('Uid')
    var time = Date().toLocaleString()
    
    var p1 = 50;
    var p2 = 100;
    var p3 = 200;
    var str = '';


    const showAlert = () => {  
        Alert.alert(  
            'Order Booked', 
            'Your unique id: '+uid+' and time is: '+time+' .' ,
             
            [   
                {text: 'OK', onPress: () => props.navigation.navigate('DashboardScreen') },  
            ]  
        );  
    }
    
    if(c1!=0){
        str = str + ' food Category:1-' + c1;

        // console.log(str);
    }
    if(c2!=0){
        str = str + ' food Category:2-' + c2;
    }
    if(c3!=0){
        str = str + ' food Category:3-' + c3;
    }

        return(
            <View style={styles.container}>
                <Text>Food Category 1       :       {c1}       :       {c1*p1}</Text>
                <Text>Food Category 2       :       {c2}       :       {c2*p2}</Text>
                <Text>Food Category 3       :       {c3}       :       {c3*p3}</Text>
                <Text>Total                            :       {c1+c2+c3}       :       {c1*p1 + c2*p2 + c3*p3}  </Text>
                <Button title="Book Order" onPress={()=>{setFoodItem(str),SetPrice(c1*p1 + c2*p2 + c3*p3) ,submit(str,price,cu,uid), showAlert() }}/>
                <Button title="Back"  onPress={() =>{
                         props.navigation.navigate({routeName:'DashboardScreen'})
                        } } />
            </View>
        )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        justifyContent:'center'
    }
})

export default BookOrder;