import {useDispatch} from "react-redux";
import {deleteANote} from "../redux/slices/Notes.js";
import axios from "axios";
import {useState} from "react";
export const useDeleteNote=()=>{
    const dispatch=useDispatch()
    const [isDeleting,setIsDeleting]=useState(false)
    const handleDelete=async(id)=>{
        setIsDeleting(true)

        const response=await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if(response.status==200)
            dispatch(deleteANote(id));
        else
            console.log('error occured')
        setIsDeleting(false)
    }
    return {handleDelete,isDeleting}
}