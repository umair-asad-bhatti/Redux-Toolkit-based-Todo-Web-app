import ListNotes from "./components/ListNotes.jsx";
import AddNote from "./components/AddNote.jsx";
function App() {

  return (
    <div className={'flex justify-center items-center'}>
        <div className={'max-w-[900px]'}>
            <div className={'flex items-center justify-center my-4'}>
                <AddNote/>
            </div>
            <div className="divider"></div>
            <div className={'flex items-center justify-center'}>
                <ListNotes/>
            </div>
        </div>
    </div>
  )
}

export default App
