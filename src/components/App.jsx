import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

const [contentList, collectContent] = useState([]);

function submitContent(inputContent){
    collectContent((previousValue) => {
        return([
            ...previousValue,
            inputContent
        ])
    });
}

function deleteContent(id){
    collectContent((previousValue) => {
        return(
            previousValue.filter((value,index) => {
              return index !== id;
            })
          )
    });
}

  return (
    <div>
      <Header />
      <CreateArea submitContent={submitContent}/>
      {contentList.map((value, index) => {
        return(
            <Note key={index} title={value.title} content={value.content} deleteContent={deleteContent} id={index}/>
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
