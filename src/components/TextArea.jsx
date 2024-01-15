const TextArea=({label,body,setBody})=>{
    return <>
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} className="textarea textarea-bordered focus:border-blue-400 h-24" placeholder="Bio"></textarea>

        </label>
    </>
}
export default  TextArea