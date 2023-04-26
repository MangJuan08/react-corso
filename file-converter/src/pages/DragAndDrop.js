import { useState, useMemo, useCallback } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as XLSX from "xlsx/xlsx";
import "./index.css";
import { toast } from "react-hot-toast";
import MaterialReactTable from "material-react-table";
import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const fileTypes = ["PDF"];

const styleMessage = {
  textAlign: "center",
};

export default function DragAndDrop() {
  const [tableData, setTableData] = useState([]);
  const [files, setFiles] = useState([]);

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
  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
    tableData[row.index] = values;
    //send/receive api updates here
    setTableData([...tableData]);
    exitEditingMode(); //required to exit editing mode
  };
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
        marca: item[5].toUpperCase(),
        modello: item[6].toUpperCase(),
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
/*
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
  };*/

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        alert(
          `Are you sure you want to delete ${row.getValue(
            "nome"
          )} ${row.getValue("cognome")}`
        )
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  return (
    <div className="container App">
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
      {tableData.length > 0 ? (
        <MaterialReactTable
          columns={columns}
          data={tableData}
          editingMode="modal" //default
          enableEditing
          onEditingRowSave={handleSaveRow}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          initialState={{
            sorting: [
              {
                id: "nome", //sort by age by default on page load
                asc: true,
              },
            ],
          }}
          enableColumnResizing
          enableColumnOrdering 
          columnResizeMode="onChange"
          
        />
      ) : (
        <p style={styleMessage}>Nessun Dati Pronti Da Esportare</p>
      )}
      <br></br><br></br><br></br><br></br>
    </div>
  );
}
