import axios, { AxiosResponse } from 'axios'
import { Activity } from '../models/activity'

// adding 1 second delay for the API calls for simulation purposes
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

// this is the old way of using it, can be converted to use async function
// axios.interceptors.response.use((response) => {
//   return sleep(1000)
//     .then(() => {
//       return response
//     })
//     .catch((error) => {
//       console.log(error)
//       return Promise.reject(error)
//     })
// })

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000)
    return response
  } catch (error) {
    console.log(error)
    return await Promise.reject(error)
  }
})

// central location for all basic information of the API
axios.defaults.baseURL = 'http://localhost:5000/api'

const responseBody = <T>(response: AxiosResponse<T>) => response.data

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities = {
  list: () => requests.get<Activity[]>('/activities'),
}

const agent = {
  Activities,
}

export default agent
