
import {useDispatch, useSelector} from "react-redux";
import NoteItem from "./NoteItem.jsx";
import {useEffect} from "react";
import {fetchNotes} from "../redux/slices/Notes.js";

const ListNotes=()=>{

        const state=useSelector((state)=>state)
        const{value:notes,isLoading}=state.notes
        const dispatch=useDispatch()
        useEffect(()=>{
            dispatch(fetchNotes())
        },[])
        // if loading return the skelton loading
        if(isLoading)
            return <div className={'flex flex-wrap justify-center items-center gap-8'}>
                    <div className="skeleton w-96 h-40"></div>
                    <div className="skeleton w-96 h-40"></div>
                    <div className="skeleton w-96 h-40"></div>
                    <div className="skeleton w-96 h-40"></div>
                    <div className="skeleton w-96 h-40"></div>
                    <div className="skeleton w-96 h-40"></div>
                    <div className="skeleton w-96 h-40"></div>
            </div>
        else if(notes.lenght==0)
            return <h1>No notes found</h1>

        return <>
            <div className={'flex flex-wrap justify-center items-center gap-8'}>
                    {
                      notes.map((note)=>{
                                    return <NoteItem completed={note.completed} id={note.id} title={note.title} />
                            })

                    }
            </div>
        </>
}
export default ListNotes