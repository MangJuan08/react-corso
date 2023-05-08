import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import MaterialReactTable from "material-react-table";
import { Typography } from '@mui/material';

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
    setTimeout(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setTableData(response.data);
        });
        isLoading(false)
}, 3000);

  }, []);

  return (
    <div className="container">
      <br></br>
      <br></br>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        state={{isLoading:loadTable}}
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
  );
};

export default GetFakeApi;
