import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import LoadingComponent from './LoadingComponent'
import { useStore } from '../stores/store'
import { observer } from 'mobx-react-lite'
import { Route } from 'react-router-dom'
import HomePage from '../../features/home/HomePage'
import ActivityFrom from '../../features/activities/form/ActivityFrom'

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Route exact path="/" component={HomePage} />
        <Route path="/activities" component={ActivityDashboard} />
        <Route path="/createActivity" component={ActivityFrom} />
      </Container>
    </>
  )
}

export default observer(App)
