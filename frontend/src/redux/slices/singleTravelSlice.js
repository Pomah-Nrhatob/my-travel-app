import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const singleTravelSlice = createSlice({
  name: 'singleTravel',
  initialState,
  reducers: {
    addSingleTravel: (state, action) => {
      if (action.payload.countries == null) {
        return {
          title: action.payload.title,
          id: action.payload.id,
          id_for_slug: action.payload.id_for_slug,
          countries: [],
        }
      }
      return { ...action.payload }
    },
  },
})

export const { addSingleTravel } = singleTravelSlice.actions

export const selectSingleTravel = (state) => state.singleTravel

export default singleTravelSlice.reducer
