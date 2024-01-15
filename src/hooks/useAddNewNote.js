import { useState} from "react";
import axios from "axios";
import { addNote } from "../redux/slices/Notes.js";
import {useDispatch} from "react-redux";
import {generateUserId} from "../utils/index.js";
export const useAddNewNote=()=>{
    const dispatch=useDispatch()
    const userId=generateUserId();
    const [isSubmitting,setIsSubmitting]=useState(false)
    const [title, setTitle] = useState("")
    const [error, setError] = useState(false)
    const addNoteToDb=async(url,note)=>{
        setIsSubmitting(true)
        const response=await axios.post(url,{...note})
        setIsSubmitting(false)
        return response.data;
    }
    const handleAddNote = async(url) => {
        if (title.length == 0) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 6000);
            return;
        } else {
            setError(false)
            const newNote={  title, userId,completed:false }
            await addNoteToDb(url,newNote)
            dispatch(addNote(newNote))
            setTitle("")

        }
    }

    return {handleAddNote,isSubmitting,error,title,setTitle}
}
