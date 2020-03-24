import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,ScrollView,TouchableOpacity,Image
} from "react-native";
import firebase from 'firebase';

export default class DashboardScreen extends Component{
    constructor(props){

        super(props);
        this.state = {
            count1:0,
            count2:0,
            count3:0,
            total:0,
            currentUser:'',
            Uid:''
        };

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({currentUser:user.email});
                this.setState({Uid:user.uid});
              console.log('User email: ', user.email);
              console.log('User id: ', user.uid);
            }
          });
    }


 
    increment1 = () => {
        this.setState({
            count1: this.state.count1+1,
        })
    }
    increment2 = () => {
        this.setState({
            count2: this.state.count2+1,
        })
    }
    increment3 = () => {
        this.setState({
            count3: this.state.count3+1,
        })
    }
    decrement1 = () => {
        this.setState({
            count1: this.state.count1-1,
        })
    }
    decrement2 = () => {
        this.setState({
            count2: this.state.count2-1,
        })
    }
    decrement3 = () => {
        this.setState({
            count3: this.state.count3-1,
        })
    }


    render(){
        return(
            <View>
            <View style={styles.container}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Dashboard</Text>
        <Text> (signed in as : {this.state.currentUser}) </Text>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}></View>
        
                <Text></Text>
                <Button title="Sign Out" onPress={() => firebase.auth().signOut()} style={styles.text}/>
                <Text style={{fontSize:20,fontWeight:'bold'}}>   {this.state.count1+ this.state.count2+ this.state.count3} </Text>
            </View>
            <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              paddingTop:5
            }}
          >
              </View>
              <ScrollView>
                  <View style={{flexDirection:'row',paddingTop:40,paddingLeft:5}}>
                  <Image
                        style={{width: 80, height: 80}}
                        source={require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/CanteenApp/assets/foodImage1.jpg')}
                        />
                  <TouchableOpacity>
                      <Text style={{fontSize:20,fontWeight:'bold'}}>Food Category 1</Text>
                  </TouchableOpacity>
                  <Text>                                              </Text>
                      <Button title="+" onPress={this.increment1} />
                      <Text style={{fontSize:20,fontWeight:'bold'}}>   {this.state.count1!=0? this.state.count1:0}   </Text>
                      <Button title="-" onPress={this.decrement1} disabled={this.state.count1==0}/>
                  </View>

                  <View style={{flexDirection:'row',paddingTop:40,paddingLeft:5}}>
                  <Image
                        style={{width: 80, height: 80}}
                        source={require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/CanteenApp/assets/foodImage1.jpg')}
                        />
                  <TouchableOpacity>
                      <Text style={{fontSize:20,fontWeight:'bold'}}>Food Category 2</Text>
                  </TouchableOpacity>
                  <Text>                                              </Text>
                      <Button title="+" onPress={this.increment2} />
                      <Text style={{fontSize:20,fontWeight:'bold'}}>   {this.state.count2!=0? this.state.count2:0}   </Text>
                      <Button title="-" onPress={this.decrement2} disabled={this.state.count2==0}/>
                  </View>

                  <View style={{flexDirection:'row',paddingTop:40,paddingLeft:5}}>
                  <Image
                        style={{width: 80, height: 80}}
                        source={require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/CanteenApp/assets/foodImage1.jpg')}
                        />
                  <TouchableOpacity>
                      <Text style={{fontSize:20,fontWeight:'bold'}}>Food Category 3</Text>
                  </TouchableOpacity>
                  <Text>                                              </Text>
                      <Button title="+" onPress={this.increment3} />
                      <Text style={{fontSize:20,fontWeight:'bold'}}>   {this.state.count3!=0? this.state.count3:0}   </Text>
                      <Button title="-" onPress={this.decrement3} disabled={this.state.count3==0}/>
                  </View>
              </ScrollView>
                <Button title="Order" disabled={this.state.count1+ this.state.count2+ this.state.count3 == 0}
                 style={{paddingTop:80}} onPress={()=>{this.props.navigation.navigate(
                     'Book',{count1:this.state.count1,
                     count2:this.state.count2,
                     count3:this.state.count3,
                     currentUser:this.state.currentUser,
                     Uid:this.state.Uid})} }/>
                
              </View>
              
 
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        paddingTop:40,
        paddingLeft:20, 
    },

});