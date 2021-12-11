import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityFrom'
import ActivityList from './ActivityList'

interface Props {
  activities: Activity[]
  selectedActivity: Activity | undefined
  selectActivity: (id: string) => void
  cancelSelectActivity: () => void
  editMode: boolean
  openForm: (id: string) => void
  closeForm: () => void
}

export default function ActivityDashboard(props: Props) {
  const {
    activities,
    selectedActivity,
    selectActivity,
    cancelSelectActivity,
    editMode,
    openForm,
    closeForm,
  } = props
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm closeForm={closeForm} activity={selectedActivity} />
        )}
      </Grid.Column>
    </Grid>
  )
}
