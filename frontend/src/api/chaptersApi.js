import { $host } from './index'

export const fetchAddChapter = async (chapter) => {
  try {
    const { data } = await $host.post('/chapter', chapter)
    return data
  } catch (error) {
    throw error
  }
}

export const updateChapter = async (chapter) => {
  try {
    const { data } = await $host.put('chapter', chapter)
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}

export const deleteChapter = async (id) => {
  const { data } = await $host.delete(`/chapter/${id}`)
  return data
}
