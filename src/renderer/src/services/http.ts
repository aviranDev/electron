import axios, { AxiosResponse } from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export interface Collection {
  _id: string
  testName: string
  testName2: string
}

export const api = async (): Promise<AxiosResponse<Collection>> => {
  try {
    return await axios.get<Collection>(`${API_URL}/test`)
  } catch (error) {
    throw error
  }
}
