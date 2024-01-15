const TextInput=({label,title,setTitle})=>{
    return <>
        <label className="form-control w-full">
            <div className="label w-full">
                <span className="label-text">{label}</span>
            </div>
            <input  value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Type here" className="input input-lg input-bordered focus:border-blue-400 w-full" />
        </label>
    </>
}
export default TextInput