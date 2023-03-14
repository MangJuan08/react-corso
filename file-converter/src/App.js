import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as XLSX from "xlsx/xlsx";
import "./styles.css";

const fileTypes = ["PDF"];

export default function App() {
  const [file, setFile] = useState(null);
  const [sheetData, setSheetData]= useState(null);
  const arr = [
    ["prova","prova"]
  ]

  useEffect(() => {
    setSheetData(arr);
  }, [])
  

  const handleChange = (file) => {
    setFile(file);
    console.log(typeof file);
  };

  const handleExport = () => {
    let wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(sheetData);
  
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  }

  return (
    <div className="App">
      <h1>Hello To Drag & Drop Files</h1>
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

