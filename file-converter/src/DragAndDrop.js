import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as XLSX from "xlsx/xlsx";

const fileTypes = ["PDF"];

export default function DragAndDrop() {
  const [file, setFile] = useState(null);
  const [sheetData, setSheetData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleChange = (file) => {
    setFile(file);
    let newData = {
      data: "",
      nome: "",
      cognome: "",
      tipo: "",
      disp: "",
      marca: "",
    };

    let arr = Object.keys(file).map((key) => {
      return file[key].name.replace(/_/g, " ");
    });
    let ab = Object.values(arr).map((item) => {
      return item.split(" ");
    });

    let cd = ab.map((item) => {
      return {
        data: item[0],
        nome: item[1],
        cognome: item[2],
        tipo: item[3],
        disp: item[4],
        marca: item[5],
      };
    });
    console.log(cd);
    setTableData(cd);
    /*setTableData((tableData) => [...tableData,cd])


   0:(5) ['20200201', 'Annalisa', 'Madonia', 'Rest', 'Cell.pdf'],
   1:(5) ['20200211', 'Giovanni', 'Maraboli', 'Asseg', 'Cell.pdf']
   
   e li voglio far diventare come questo 

   let dataOb [
    { data:'20200201',nome:'Annalisa', cognome:'Madonia',tipo:'Rest',disp:'Cell.pdf'},
    { data:'20200211',nome:'Giovanni', cognome:'Maraboli',tipo:'Asseg',disp:'Cell.pdf'}
   ]
   
   
   */

    /*-------funziona per singolo file ------*/

    /*
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
  };
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

  const exportToCSV = () => {
    if (tableData.length > 0) {
      const ws = XLSX.utils.json_to_sheet(tableData);

      /* add to workbook */
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "foglio");

      /* generate an XLSX file */
      XLSX.writeFile(wb, "Assegnazione_Restituzione.xlsx");
    } else {
      alert("nessun dati da esportare");
    }
  };

  const cleartable = () => {
    setTableData([]);
  };

  return (
    <div className="container App">
      <br></br>
      <br></br>
      <h1>Drag Files</h1>
      <div className="row">
        <div className="col-md-12">
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </div>
      </div>

      <br></br>

      <br></br>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Tipo</th>
            <th scope="col">Dispositivo</th>
            <th scope="col">Marca</th>
            <th scope="col">modello</th>
            <th scope="col">Seriale</th>
            <th scope="col">Firma</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.data}</td>
                <td>{item.nome}</td>
                <td>{item.cognome}</td>
                <td>{item.tipo}</td>
                <td>{item.disp}</td>
                <td>{item.marca}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={exportToCSV}
        style={{ marginRight: 20 }}
      >
        EXPORT TABLE
      </button>
      <br></br>
      <br></br>
      <button
        className="btn btn-primary"
        onClick={cleartable}
        style={{ marginRight: 20 }}
      >
        CLEART TABLE
      </button>
    </div>
  );
}

/*  <ul>
        {file ? Object.keys(file).map((key) => (
          <li key={key}>{file[key].name.replace(/_/g, " ")}</li>
        )) 
      : ""}
      </ul>*/
