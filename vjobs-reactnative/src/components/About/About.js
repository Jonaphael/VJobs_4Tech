import React , { Component }from 'react'

import { SafeAreaView, Text } from 'react-native'

export default class About extends React.Component{

    static navigationOptions = {
        title: 'About',
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

        const job = this.getJob();
        return <SafeAreaView>
                <Text>{job.name}</Text>
              </SafeAreaView> 
    }
} 
