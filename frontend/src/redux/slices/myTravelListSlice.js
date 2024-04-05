import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { $host } from '../../api'
import { fetchTravelsApi } from '../../api/travelsApi'

const initialState = []

export const fetchTravels = createAsyncThunk(
  'myTravelList/fetchTravel',
  async () => {
    try {
      const { data } = await $host.get('/travel')
      return data
    } catch (error) {
      throw error
    }
  }
)

const myTravelListSlice = createSlice({
  name: 'myTravelList',
  initialState,
  reducers: {
    addTravel: (state, action) => {
      state.push(action.payload)
    },
    changeTravel: (state, action) => {
      current(state).forEach((el, index) => {
        if (el.id_for_slug == action.payload.id_for_slug) {
          state[index] = { ...action.payload }
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTravels.fulfilled, (state, action) => {
      return [...action.payload]
    })
  },
})

export const { addTravel, changeTravel } = myTravelListSlice.actions

export const selectTravelList = (state) => state.myTravelList

export default myTravelListSlice.reducer
