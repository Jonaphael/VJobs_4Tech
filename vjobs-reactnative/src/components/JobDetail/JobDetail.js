import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Card, Button } from 'react-native-elements'


export default class JobDetail extends React.Component{
    
    static navigationOptions = {
        title: 'Job',
        headerStyle: {
            backgroundColor: '#343a40',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
    
    getJob(){
        const { navigation } = this.props;
        const job = navigation.getParam('job', {})
        return job;
    }

    render(){
        const item = this.getJob();
       return ( <Card style={{width : 700}}
            image= {require('../../assets/designer.png')} style={{ width: '80%'}}>
            <Text style={ styles.name }>{item.name}</Text>
            <Text style={ styles.description1 }>Description: </Text>
            <Text style={ styles.description2 }>{item.description}</Text>
            <Text style={ styles.salary1 }>Salary:</Text>
            <Text style={ styles.salary2 } >R$ {item.salary}</Text>
            <View style={ styles.buttonRow } >
                <Button size={13}  onPress={ () => alert('This is a button!')} title="Edit" buttonStyle={ styles.buttonEdit } icon={{ name: 'edit'}}></Button>
                <Button size={13}  onPress={() =>  alert('This is a button!')} title="Remove" buttonStyle={ styles.buttonDelete } icon={{ name: 'delete'}}></Button>
            </View>
        </Card>
       )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },name : {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 7
    },
    description1: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3
    },
    description2: {
        marginBottom: 8
    },
    salary1: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    salary2: {
        marginTop: 2,
        marginBottom: 8
    },
    buttonEdit:{
        backgroundColor: "rgba(255,193,7, 1)",
        width: 120,
        height: 30,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    },
    buttonDelete:{
        backgroundColor: "rgba(220,53,69, 1)",
        width: 120,
        height: 30,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    },
    buttonRow: {
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});