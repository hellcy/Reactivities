import { makeAutoObservable } from 'mobx'
import agent from '../api/agent'
import { Activity } from '../models/activity'

export default class ActivityStore {
  activities: Activity[] = []
  selectedActivity: Activity | null = null
  editMode = false
  loading = false
  loadingInitial = false

  constructor() {
    makeAutoObservable(this)
  }

  loadActivities = async () => {
    this.setLoadingInitial(true)
    try {
      const activities = await agent.Activities.list()

      // MobX is a mutable state management library
      // we can directly modify the states in the store
      activities.forEach((activity) => {
        activity.date = activity.date.split('T')[0]
        this.activities.push(activity)
      })
      this.setLoadingInitial(false)
    } catch (error) {
      console.log(error)
      this.setLoadingInitial(false)
    }
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state
  }
}
