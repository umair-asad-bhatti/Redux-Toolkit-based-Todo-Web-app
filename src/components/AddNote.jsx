import TextInput from "./TextInput.jsx";


import Alert from './Alert.jsx'
import {useAddNewNote} from "../hooks/useAddNewNote.js";

const AddNote = () => {

    const {setTitle,title,isSubmitting,error,handleAddNote}=useAddNewNote()

    return <div className={'flex flex-col  justify-start lg:w-[700px]'}>
        <TextInput title={title} setTitle={setTitle} label={'Add Title'} />
        <button disabled={isSubmitting} className={'btn hover:bg-blue-400 hover:text-white my-4'} onClick={()=>handleAddNote('https://jsonplaceholder.typicode.com/todos')}>{isSubmitting?'Adding...':'Add Note'}</button>
        <div className="animate-pulse duration-150 absolute bottom-0 left-0 w-full z-10">
            {
                error && <Alert message={'Note Title cannot be empty'} />
            }
        </div>
    </div>
}
export default AddNote