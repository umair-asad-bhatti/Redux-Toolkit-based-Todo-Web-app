import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../slices/Notes.js'

export const store = configureStore({
    reducer: {
        notes:notesReducer,
    },
})