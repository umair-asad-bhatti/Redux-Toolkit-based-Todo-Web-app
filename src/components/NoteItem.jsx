import {useDeleteNote} from "../hooks/useDeleteNote.js";
// eslint-disable-next-line react/prop-types
const NoteItem=({title,id,completed})=>{
    const {handleDelete,isDeleting}=useDeleteNote()

    return (
        <div className="card w-96 bg-base-100 border  shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>completed : {completed?<span className={'text-green-400'}>true</span>:<span>false</span>}</p>
                <div className="card-actions justify-end">
                    <button disabled={isDeleting} onClick={()=>handleDelete(id)} className={"btn hover:bg-red-400 hover:text-white"}>{isDeleting?'Loading...':'Delete'}</button>
                </div>
            </div>
        </div>
    )
}
export default NoteItem