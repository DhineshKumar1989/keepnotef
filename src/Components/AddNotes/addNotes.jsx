import { useState } from "react";

const AddNotes = (props) => {

    const [notes, setNotes] = useState({ title: "", descr: "" })

    let onsubmit = (event) => {
        event.preventDefault();
        //console.log(notes);
        // Store in JSon
        props.saveNote(notes)
        setNotes({
            title:"",
            descr:""
        })
        
    }

    let ontxtchage = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        var eleName = event.target.name;
        console.log(eleName);

        setNotes({ ...notes, [eleName]: event.target.value })
    }


    return (
        <div>
            <input name="title" type="text" placeholder="text" value={notes.title} onChange={ontxtchage}></input>
            <input name="descr" type="text" placeholder="desc" value={notes.descr} onChange={ontxtchage}></input>
            <button onClick={onsubmit}>Save</button>
        </div>
    )


}

export default AddNotes