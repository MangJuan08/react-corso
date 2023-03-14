import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as XLSX from "xlsx/xlsx";
import "./styles.css";

const fileTypes = ["PDF"];

export default function App() {
  const [file, setFile] = useState(null);
  const [sheetData, setSheetData]= useState(null);
  const arr = [
    {
      "id": { /* (data omitted) */ },
      "name": {
        "first": "John",          // <-- first name
        "last": "Adams"           // <-- last name
      },
      "bio": {
        "birthday": "1735-10-19", // <-- birthday
        "gender": "M"
      },
      "terms": [
        { "type": "viceprez", /* (other fields omitted) */ },
        { "type": "viceprez", /* (other fields omitted) */ },
        { "type": "prez", /* (other fields omitted) */ }
      ]
    }
  ]

  useEffect(() => {
    setSheetData(arr);
  }, [])
  

  const handleChange = (file) => {
    setFile(file);
    console.log(typeof file);
  };

  const handleExport = () => {
    let cols = ['Data','Nome','Cognome','Seriale','Modello','Marca','Tipo','Firma'];
    let ws = XLSX.utils.json_to_sheet(sheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws);
  
    /* fix headers */
    XLSX.utils.sheet_add_aoa(ws, [cols], { origin: "A1" });
  
  
    /* create an XLSX file and try to save to Presidents.xlsx */
    XLSX.writeFile(workbook, "Presidents.xlsx", { compression: true });
 
  }

  return (
    <div className="App">
      <h1>Drag Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{ file ? file.length : "NO FILES UPLOADED"}</p>
      <ul>
        {file ? Object.keys(file).map((key) => (
          <li key={key}>{file[key].name.replace(/_/g, " ")}</li>
        )) 
      : ""}
      </ul>

      <button className="btn btn-primary" onClick={handleExport}>EXPORT</button>
    </div>
  );
}

