import React from 'react'

import { Image, View, StyleSheet, Text, FlatList, SafeAreaView, TouchableHighlight } from 'react-native'
import { Card, Button, ListItem } from 'react-native-elements'
import { getJobs } from '../../networking/API';

const img = require("../../assets/logo-h-vjobs.png")

class jobList extends React.Component{
    
    static navigationOptions = {
        title : 'VJobs',
        headerStyle: {
            backgroundColor: '#343a40',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    };
    
    state = {
        jobs : []
    }

    constructor( props ){
        super()
    }

    /* fetch data */
    fetchData(){
        getJobs()
         .then( obj => this.setState({ jobs: obj }))
         .catch( err => console.log(err))

    }

    removeJobHandler = () => {

    }

    componentDidMount(){
        this.fetchData();
    }

    renderItem = ({item}) => {
        /* make every list here */
          const  badgeI = {
            value: `Impaired`,
            badgeContainerStyle: { right: 10, backgroundColor: '#56579B' },
            badgeTextStyle: { fontSize: 12 },
          };


        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('JobDetail', { job: item})}>
                <ListItem
                    title={item.name}
                    subtitle='Posted by Venturus'
                     { ...item.isImpaired ? {badge:badgeI} : null}
                    containerStyle={{ backgroundColor: 'white' }}/>
            </TouchableHighlight>)
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
            <Image source={img}/>
                <FlatList data= {this.state.jobs} 
                    renderItem={this.renderItem}
                    keyExtractor={ item => `${item.id}`}  />
            </SafeAreaView>
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

export default jobList;