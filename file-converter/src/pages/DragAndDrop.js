import { useState, useMemo, useCallback } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as XLSX from "xlsx/xlsx";
import "./index.css";
import { toast } from "react-hot-toast";
import MaterialReactTable from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useNavigate  } from "react-router-dom";
import {
  Delete,
  Edit
} from "@mui/icons-material";
import NavBar from "../components/NavBar";

const fileTypes = ["PDF"];
const style1 = {
  textAlign: "left",
};
const style2 = {
  textAlign: "right",
};

const styleMessage = {
  textAlign: "center",
};

export default function DragAndDrop() {
  const [tableData, setTableData] = useState([]);
  const [files, setFiles] = useState([]);

  const columns = useMemo(
    () => [
      { accessorKey: "data", header: "Data", enableClickToCopy: true },
      { accessorKey: "nome", header: "Nome", enableClickToCopy: true },
      { accessorKey: "cognome", header: "Cognome", enableClickToCopy: true },
      { accessorKey: "disp", header: "Dispositivo", enableClickToCopy: true },
      { accessorKey: "tipo", header: "Tipo", enableClickToCopy: true },
      { accessorKey: "marca", header: "Marca", enableClickToCopy: true },
      { accessorKey: "modello", header: "Modello", enableClickToCopy: true },
      { accessorKey: "seriale", header: "Seriale", enableClickToCopy: true },
      { accessorKey: "firma", header: "Firma", enableClickToCopy: true },
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
    console.log(file)
    let arr = Object.keys(file).map((key) => {
      return file[key].name.replace(/_/g, " ");
    });
    let ab = Object.values(arr).map((item) => {
      return item.replace(".pdf", "");
    });

    let cd = Object.values(ab).map((item) => {
      return item.split(" ");
    });

    console.log(cd)
    
    let ef = cd.map((item) => {
      return {
        data: item[0],
        nome: item[1].toUpperCase(),
        cognome: item[2].toUpperCase(),
        tipo: item[3].toUpperCase(),
        disp: item[4].toUpperCase(),
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

  const checkTable = () => {
    console.log(tableData)
  }
  const token = localStorage.getItem("token");
   const navigate = useNavigate();
  if(token)
  {
  return (
    <div>
      <NavBar/>
    <div className="container-fluid">
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
            <button onClick={checkTable}>check table</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-6" style={style1}></div>
        <div className="col-md-6" style={style2}>
          {tableData.length > 0 ? (
            <p>
              ELEMENTI TOTALI: <b>{tableData.length}</b>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {tableData.length > 0 ? (
        <MaterialReactTable
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 120,
            },
          }}
          columns={columns}
          data={tableData}
          editingMode="modal" //default
          enableEditing
          enableStickyHeader
          onEditingRowSave={handleSaveRow}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="left" title="Delete">
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
        <p style={styleMessage}>nessun dati da esportare</p>
      )}
      <br></br>
      <br></br>
    </div>
    </div>
  )
      } else {
        navigate("/")
      }
}
