import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./styles.css";

const fileTypes = ["PDF"];

export default function App() {
  const [file, setFile] = useState(null);
  const [names,setName] = useState(null)
  let arr = []
  const handleChange = (file) => {
    setFile(file);
    console.log(typeof file);
   
    Object.keys(file).map((key) => (
 arr.pushfile[key].name.replace(/_/g, " ")
    )) 

    console.log(arr)
  };
  return (
    <div className="App">
      <h1>Hello To Drag & Drop Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <ul>
        {file ? Object.keys(file).map((key) => (
          <li key={key}>{file[key].name.replace(/_/g, " ")}</li>
        )) 
      : "UPLOAD FILES"}
      </ul>
    </div>
  );
}

