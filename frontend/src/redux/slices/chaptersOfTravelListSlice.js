import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $host } from '../../api'

const initialState = []

const chaptersOfTravelListSlice = createSlice({
  name: 'chapterOfTravelList',
  initialState,
  reducers: {
    fetchChaptersFromDb: (state, action) => {
      return [...action.payload]
    },
    changeChapter: (state, action) => {
      const chapter = state.find((el) => el.id === action.payload.id)
      chapter.title = action.payload.title
      chapter.text = action.payload.text
    },
    addChapter: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { fetchChaptersFromDb, changeChapter, addChapter } =
  chaptersOfTravelListSlice.actions

export const selectChapters = (state) => state.chaptersOfTravelList

export default chaptersOfTravelListSlice.reducer
