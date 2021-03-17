
import React, { useState } from "react";
import NoteForm from "./components/NoteForm"
import Notes from "./components/Notes"
import "./styles.css"




function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Happy little quote",
      body:
        "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
    }
  ]);

const addNote =(newNote)=>{
  setNotes([...notes,newNote])


}
  return (
    <div className="App">
      <h1>My Notes</h1>
      <NoteForm addNote={addNote}/>
      <Notes notes={notes} />
    </div>
  );
}
export default App;