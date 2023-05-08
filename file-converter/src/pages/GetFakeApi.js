import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import MaterialReactTable from "material-react-table";
import { Typography } from '@mui/material';
import { useNavigate  } from "react-router-dom";
import NavBar from "../components/NavBar";

const GetFakeApi = () => {
  const [tableData, setTableData] = useState([]);
  const [loadTable, isLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID", enableClickToCopy: true, },
      { accessorKey: "title", header: "Title", enableClickToCopy: true, },

    ],
    []
  );

  const handleSaveCell = (cell, value) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
    tableData[cell.row.index][cell.column.id] = value;
    //send/receive api updates here
    setTableData([...tableData]); //re-render with new data
  };

  useEffect(() => {
 loadTableMat();

 const datas = localStorage.getItem("userData");
 console.log(JSON.stringify(datas))
  }, []);


  const loadTableMat = () => {
    isLoading(true);
    setTableData([])
    setTimeout(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setTableData(response.data);
        });
        isLoading(false)
}, 3000);


  }

 const token = localStorage.getItem("token");
  const navigate = useNavigate();
 if(token) {
    return (<div>
        <NavBar/>
        <div className="container">
          <br></br>
          <br></br>
          <button className="btn btn-primary" onClick={loadTableMat}>reset table</button>
          <br></br>
          <br></br>
          <MaterialReactTable
            columns={columns}
            data={tableData}
            state={{isLoading:loadTable}}
            enableStickyHeader
            editingMode="cell"
          enableEditing
          muiTableBodyCellEditTextFieldProps={({ cell }) => ({
            //onBlur is more efficient, but could use onChange instead
            onBlur: (event) => {
              handleSaveCell(cell, event.target.value);
            },
          })}
          renderBottomToolbarCustomActions={() => (
            <Typography sx={{ fontStyle: 'italic', p: '0 1rem' }} variant="body2">
              Double-Click a Cell to Edit
            </Typography>
          )}
          />
        </div>
        </div>
      );
 } else
 {
    navigate("/");
 }
};

export default GetFakeApi;
