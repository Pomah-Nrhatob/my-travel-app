import { configureStore } from '@reduxjs/toolkit'
import myTravelListReducer from './slices/myTravelListSlice'
import chaptersOfTravelListSlice from './slices/chaptersOfTravelListSlice'
import singleTravelSlice from './slices/singleTravelSlice'

const store = configureStore({
  reducer: {
    myTravelList: myTravelListReducer,
    chaptersOfTravelList: chaptersOfTravelListSlice,
    singleTravel: singleTravelSlice,
  },
})

export default store
