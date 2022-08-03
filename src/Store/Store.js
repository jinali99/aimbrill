import { configureStore } from '@reduxjs/toolkit'
import addReducer from '../Slice/addSlice'
export const store = configureStore({
    reducer: {
        addReducer:addReducer
      
  },
})