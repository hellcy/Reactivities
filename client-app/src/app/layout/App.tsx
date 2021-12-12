import React from 'react'
import { Container } from 'semantic-ui-react'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import { observer } from 'mobx-react-lite'
import { Route } from 'react-router-dom'
import HomePage from '../../features/home/HomePage'
import ActivityFrom from '../../features/activities/form/ActivityFrom'
import ActivityDetails from '../../features/activities/details/ActivityDetails'

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/activities" component={ActivityDashboard} />
        <Route path="/activities/:id" component={ActivityDetails} />
        <Route path="/createActivity" component={ActivityFrom} />
      </Container>
    </>
  )
}

export default observer(App)
