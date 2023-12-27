import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
const { Zoom } = require('@mui/material');

function CreateArea(props) {

    const [inputContent,getInputContent] = useState({
        title:"",
        content:""
    });

    const [showCondition,setShowCondition] = useState(false);

    function handleInput(event){
        var {value,name} = event.target;
        getInputContent((previousValue) => {
            return({
                ...previousValue,
                [name]: value
            });
        });
    }

    function submitContent(event){
        props.submitContent(inputContent);
        getInputContent({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    function showINput(){
        setShowCondition(true);
    }
  return (
    <div>
      <form className="create-note" onSubmit={submitContent}>
        {showCondition?<input name="title" placeholder="Title" value={inputContent.title} onChange={handleInput} required/>:null}
        <textarea name="content" placeholder="Take a note..." rows={showCondition?"3":"1"} value={inputContent.content} onChange={handleInput} onClick={showINput} required/>
        <Zoom in={showCondition}>
        <Fab onClick={submitContent}>
            <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
