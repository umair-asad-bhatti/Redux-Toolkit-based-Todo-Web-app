import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchNotes=createAsyncThunk('fetchNotes',async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/')
    return response.json()
})
const initialState = {
    value: [],
    isLoading:false,
    isError:false
}
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.value.unshift(action.payload)
        },
        deleteANote: (state, action) => {
            const idToDelete = action.payload;
            state.value = state.value.filter(note => note.id !== idToDelete)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNotes.fulfilled,(state,action)=>{
            state.value=action.payload
            state.isLoading=false
            state.isError=false
        })
        builder.addCase(fetchNotes.pending,(state)=>{
            state.isLoading=true
        })
    }
})

export const { addNote, deleteANote } = notesSlice.actions
export default notesSlice.reducer
