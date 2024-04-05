import { $host } from './index'

export const fetchTravelsApi = async () => {
  try {
    const { data } = await $host.get('/travel')
    return data
  } catch (error) {
    throw error
  }
}

export const createTravels = async (travel) => {
  const { data } = await $host.post('/travel', travel)
  return data
}

export const updateTravel = async (travel) => {
  const { data } = await $host.put('/travel', travel)
  return data
}

export const deleteTravel = async (id) => {
  const { data } = await $host.delete(`/travel/${id}`)
  return data
}
