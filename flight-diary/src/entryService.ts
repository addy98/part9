import axios from 'axios';
import { Entry, NewEntry } from "./types";

const baseUrl = 'http://localhost:3000/api/diaries'

// export const getAllEntries = () => {
//   return axios
//     .get<Entry[]>(baseUrl)
//     .then(response => response.data)
// }

export const getAllEntries = async () => {
    const { data } = await axios.get<Entry[]>(baseUrl)
    return data
}

// export const createEntry = (object: NewEntry) => {
//   return axios
//     .post<Entry>(baseUrl, object)
//     .then(response => response.data)
// }

export const createEntry = async (object: NewEntry) => {
    const { data } = await axios.post<Entry>(baseUrl, object)
    return data
}