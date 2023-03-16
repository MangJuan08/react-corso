import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import * as XLSX from "sheetjs-style";
import { DownloadTableExcel } from "react-export-table-to-excel";
import * as FileSaver from "file-saver";
import { nanoid } from "nanoid";


export const ExportTableExcel = () => {
  const [datas, setData] = useState([]);
  const [formData, setStateForm] = useState({
    data_: "",
    nome: "",
    cognome: "",
    tipo: "",
    disp: "",
    marca: "",
    modello: "",
    seriale: "",
    firma: "",
  });

  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(datas);

    /* add to workbook */
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "foglio");

    /* generate an XLSX file */
    XLSX.writeFile(wb, "sheetjs.xlsx");
  };

  const onValChange = (event) => {
    const { name, value } = event.target;
    setStateForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const addRow = (e) => {
    e.preventDefault();
    const checkVal = !Object.values(formData).every((res) => res === "");
    if (checkVal) {
    const newDatas = {
      id: nanoid(),
      data_: formData.data_,
      nome: formData.nome,
      cognome: formData.cognome,
      tipo: formData.tipo,
      disp: formData.disp,
      marca: formData.marca,
      modello: formData.modello,
      seriale: formData.seriale,
      firma: formData.firma,
    };

  
    const newDa = [...datas, newDatas];
    setData(newDa);}
    const isEmpty = {
      id: "",
      data_: "",
      nome: "",
      cognome: "",
      tipo: "",
      disp: "",
      marca: "",
      modello: "",
      seriale: "",
      firma: "",
    };
    setStateForm(isEmpty);

  };
  
  const deleteRow = (id) => {
    const newContacts = [...datas];
    const index = datas.findIndex((item) => item.id === id);
    newContacts.splice(index, 1);
    setData(newContacts);
  };

  const clearTable = () => {
    setData([]);
  };

  return (
    <div className="container">
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <button className="btn btn-danger" onClick={clearTable}>
        Clear table
      </button>
      <button className="btn btn-success" onClick={exportToCSV}>
        EXPORT TABLE TO FILE EXCEL
      </button>
      <br></br> <br></br>
      <h3>{datas.length > 0 ? "Numero Totale:" + datas.length : "Numero Totale:"+ 0}</h3>
      <br></br> <br></br>
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
          {datas.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.data_}</td>
                <td>{item.nome}</td>
                <td>{item.cognome}</td>
                <td>{item.tipo}</td>
                <td>{item.disp}</td>
                <td>{item.marca}</td>
                <td>{item.modello}</td>
                <td>{item.seriale}</td>
                <td>{item.firma}</td>
                <td><button onClick={()=>deleteRow(item.id)}>delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="data_"
              value={formData.data_}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="DATA"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="NOME"
            />
          </div>
          <br></br>
          <div className="col">
            <input
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="COGNOME"
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="tipo"
              value={formData.tipo}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="TIPO"
            />
          </div>

          <div className="col">
            <input
              type="text"
              name="disp"
              value={formData.disp}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="DISPOSITIVO"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="marca"
              value={formData.marca}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="MARCA"
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="modello"
              value={formData.modello}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="MODELLO"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="seriale"
              value={formData.seriale}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="SERIALE"
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="firma"
              value={formData.firma}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="FIRMA"
            />
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col ">
            <button
              onClick={(e) => addRow(e)}
              className="btn btn-primary form-control"
            >
              AGGIUNGI RECORD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
