import React, { useState } from "react";

const NoteForm = (props) => {
  const [note, setNote] = useState({
    id: Date.now(),
    title: "",
    body: "",
  });
  console.log(note);

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  const submitHander = (e) => {
    e.preventDefault();
    setNote({ title: "", body: "" });
    props.addNote(note);
  };
  return (
    <div>
      <form onSubmit={submitHander}>
        <label htmlFor="title" />
        <input
          type="text"
          name="title"
          id="title"
          placeholder=" title"
          value={note.title}
          onChange={handleChange}
        />
        <label htmlFor="body" />
        <input
          type="textarea"
          name="body"
          id="body"
          placeholder="body"
          value={note.body}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NoteForm;
