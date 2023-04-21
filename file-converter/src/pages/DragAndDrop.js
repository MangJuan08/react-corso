import {  useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as XLSX from "xlsx/xlsx";
import "./index.css";
import { toast } from "react-hot-toast";
import DragAndDropTable from "../components/DragAndDropTable";
import Spinner from "react-bootstrap/Spinner";
import axios from 'axios';

const fileTypes = ["PDF"];

const styleMessage = {
  textAlign:"center"
}



export default function DragAndDrop() {
  const [tableData, setTableData] = useState([]);
  const [files, setFiles] = useState([]);

  const handleChange = (file) => {
    setFiles(file);
    let arr = Object.keys(file).map((key) => {
      return file[key].name.replace(/_/g, " ");
    });
    let ab = Object.values(arr).map((item) => {
      return item.replace(".pdf", "");
    });

    let cd = Object.values(ab).map((item) => {
      return item.split(" ");
    });

    let ef = cd.map((item) => {
      return {
        data: item[0],
        nome: item[1],
        cognome: item[2],
        tipo: item[3],
        disp: item[4],
        marca: item[5],
        modello: item[6],
        seriale: item[7],
        firma: item[8],
      };
    });

    setTableData(ef);
  };

  const exportToCSV = () => {
    if (tableData.length > 0) {
      const ws = XLSX.utils.json_to_sheet(tableData);

      /* add to workbook */
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "foglio");

      /* generate an XLSX file */
      XLSX.writeFile(wb, "Assegnazione_Restituzione.xlsx");
      toast.success("FILE EXPORTED SUCCESSFULLY");
      setTableData([]);
    } else {
      alert("nessun dati da esportare");
    }
  };

  const cleartable = () => {
    setTableData([]);
  };

  const deleteRow = (id, e) => {
    console.log(id);
    setTableData(tableData.filter((item, i) => i !== id));
  };

  const onChangeInput = (e, rowId) => {
    const { name, value } = e.target;

    const editData = tableData.map((item, index) =>
      index === rowId && name ? { ...item, [name]: value } : item
    );
    setTableData(editData);

  
  };
/*
funzione serve per testare e vedere i dati
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response))
  }*/
  

 
  return (
    <div className="container App">
      <br></br>
      <br></br>

      <div className="row">
        {tableData.length > 0 ? (
          ""
        ) : (
          <div className="col-md-6">
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </div>
        )}
        {tableData.length > 0 ? (
          <div className="col-md-6">
            <button
              className="btn btn-primary"
              onClick={exportToCSV}
              style={{ marginRight: 20 }}
            >
              EXPORT TABLE
            </button>
            <button
              className="btn btn-primary"
              onClick={cleartable}
              style={{ marginRight: 20 }}
            >
              CLEART TABLE
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <br></br>

      <br></br>
      {tableData.length > 0 ? (
        <DragAndDropTable
          deleteRow={deleteRow}
          onChangeInput={onChangeInput}
          tableData={tableData}
        />
      ) : (
        <p style={styleMessage}>Nessun Dati Pronti Da Esportare</p>
      )}
      
    </div>
  );
}
/*-------funziona per singolo file ------*/

/*
<Spinner animation="border" variant="primary"></Spinner>
 <div className="row">
        <div className="col-md-12">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Nome</th>
                <th scope="col">Cognome</th>
                <th scope="col">Tipo</th>
                <th scope="col">Dispositivo</th>
                <th scope="col">Marca</th>
                <th scope="col">Modello</th>
                <th scope="col">Seriale</th>
                <th scope="col">Firma</th>
                <th scope="col">Operazione</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      name="data"
                      value={item.data}
                      type="text"
                      onChange={(e) => onChangeInput(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      name="nome"
                      value={item.nome}
                      type="text"
                      onChange={(e) => onChangeInput(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      name="cognome"
                      value={item.cognome}
                      type="text"
                      onChange={(e) => onChangeInput(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      name="tipo"
                      value={item.tipo}
                      type="text"
                      onChange={(e) => onChangeInput(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      name="disp"
                      value={item.disp}
                      type="text"
                      onChange={(e) => onChangeInput(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      name="marca"
                      value={item.marca}
                      type="text"
                      onChange={(e) => onChangeInput(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      name="modello"
                      value={item.modello}
                      type="text"
                      onChange={(e) => onChangeInput(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      name="seriale"
                      value={item.seriale}
                      type="text"
                      onChange={(e) => onChangeInput(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      name="firma"
                      value={item.firma}
                      type="text"
                      onChange={(e) => onChangeInput(e, index)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => deleteRow(index, e)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    <button className="btn btn-success btn-sm" onClick={(e) => createPdf(index,item.data+"_"+item.nome+"_"+item.cognome)}>create pdf</button>
  let arr = Object.keys(file).map((key) => {
     return file[key].name.replace(/_/g, " ")})
 let prov = arr.toString().split(" ");


  console.log(prov)
  newData = {
    data:prov[0],
    nome:prov[1],
    cognome:prov[2],
    tipo:prov[3],
    disp:prov[4],
    marca:prov[5]
  }
  setTableData((tableData) => [...tableData,newData])

  */

/*-------funziona per singolo file ------*/
/* 
  const handleExport = () => {
    let cols = [
      "Data",
      "Nome",
      "Cognome",
      "Seriale",
      "Modello",
      "Marca",
      "Tipo",
      "Firma",
    ];
    let ws = XLSX.utils.json_to_sheet(sheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws);

    /* fix headers 
    XLSX.utils.sheet_add_aoa(ws, [cols], { origin: "A1" });

    /* create an XLSX file and try to save to Presidents.xlsx 
    XLSX.writeFile(workbook, "Presidents.xlsx", { compression: true });
  };*/
