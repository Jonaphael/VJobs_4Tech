import { createStackNavigator } from 'react-navigation'

import JobList from './src/components/JobList/JobList'
import JobDetail from './src/components/JobDetail/JobDetail'
import About from './src/components/About/About'

export default createStackNavigator({
    Home : JobList,
    JobDetail : JobDetail,
    About: About
},
{
  initialRouteName : 'Home'
})