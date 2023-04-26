import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const style1 = {
  textAlign: "left",
};
const style2 = {
  textAlign: "right",
};

const tableColumns = [
  { label: "Data", key: 1 },
  { label: "Nome", key: 2 },
  { label: "Cognome", key: 3 },
  { label: "Tipo", key: 4 },
  { label: "Dispositivo", key: 5 },
  { label: "Marca", key: 6 },
  { label: "Modello", key: 7 },
  { label: "Seriale", key: 8 },
  { label: "Firma", key: 9 },
  { label: "Operazione", key: 10 },
];

const DragAndDropTable = ({ tableData, deleteRow, onChangeInput }) => {


  const columns = useMemo(
    () => [
      { accessorKey: "data", header: "Data" },
      { accessorKey: "nome", header: "Nome" },
      { accessorKey: "cognome", header: "Cognome" },
      { accessorKey: "disp", header: "Dispositivo" },
      { accessorKey: "tipo", header: "Tipo" },
      { accessorKey: "marca", header: "Marca" },
      { accessorKey: "modello", header: "Modello" },
      { accessorKey: "seriale", header: "Seriale" },
      { accessorKey: "firma", header: "Firma" },
    ],
    []
  );

  return (
    <div>
      <div className="row">
        <div className="col-md-6" style={style1}></div>
        <div className="col-md-6" style={style2}>
          {tableData.length > 0 ? (
            <p>
              ELEMENTI TOTALI: <b>{tableData.length}</b>
            </p>
          ) : (
            <p>
              ELEMENTI TOTALI: <b>{tableData.length}</b>
            </p>
          )}
        </div>
      </div>


      <br></br>
      <br></br>
    </div>
  );
};

export default DragAndDropTable;

/*
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            {tableColumns.map(({ label, key }) => {
              return <th key={key}>{label}</th>;
            })}
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
      </table>*/
