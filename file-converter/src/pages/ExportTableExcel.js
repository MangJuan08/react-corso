import React, {  useState } from "react";
import * as XLSX from "xlsx";
import { toast, Toaster } from "react-hot-toast";
import FormRecordFill from "../components/FormRecordFill";
import { Table } from "../components/Table";
import { v4 as uuid } from "uuid";
/*import "react-bootstrap-table-next/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";*/

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
    if (datas.length > 0) {
      const ws = XLSX.utils.json_to_sheet(datas);

      /* add to workbook */
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "foglio");

      /* generate an XLSX file */
      XLSX.writeFile(wb, "Assegnazione_Restituzione.xlsx");
      toast.success("TABLE EXPORTED SUCCESSFULLY");
    } else {
      alert("nessun dati da esportare");
    }
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
    const newDatas = {
      id: uuid(),
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
    console.log(e.target.value)
    setData((datas) => [...datas, newDatas]);
    console.log(datas);
    toast.success("RECORD ADDED SUCCESSFULLY");

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
    console.log(datas);
  };

  const deleteRow = (id) => {
    setData(datas.filter((item, i) => item.id !== id));

    toast.success("RECORD DELETED SUCCESSFULLY");
  };

  const clearTable = () => {
    if (datas.length > 0) setData([]);
    else alert("TABELLA VUOTA");
  };

  const readExcel = (f) => {
    const p = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(f);
      fileReader.onload = (e) => {
        const buffArray = e.target.result;
        const wb = XLSX.read(buffArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (err) => {
        reject(err);
      };
    });
    p.then((d) => {
      setData(...datas, d);
    });
  };

  const clearForm = () => {
    const isEmpty = {
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

  return (
    <div className="container">
      <br></br>
      <br></br>
      <Toaster position="top-center" reverseOrder={false} />
      <button
        className="btn btn-danger"
        onClick={clearTable}
        style={{ marginRight: 20 }}
      >
        CLEAR TABLE
      </button>
      <button
        className="btn btn-primary"
        onClick={exportToCSV}
        style={{ marginRight: 20 }}
      >
        EXPORT TABLE
      </button>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <br></br> <br></br>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <FormRecordFill
                datas={datas}
                formData={formData}
                onValChange={onValChange}
                deleteRow={deleteRow}
                addRow={addRow}
                clearForm={clearForm}
              ></FormRecordFill>
              <br></br>{" "}
              <p>
                {datas.length > 0
                  ? "Numero Totale:" + datas.length
                  : "Numero Totale:" + 0}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-12">
          <Table datas={datas} deleteRow={deleteRow}></Table>
        </div>
      </div>
    </div>
  );
};
/*
 

   <BootstrapTable
            bootstrap4
            keyField="id"
            data={datas}
            columns={columns}
            filter={filterFactory()}
            pagination={paginationFactory({
              page: 1,
              sizePerPage: 5,
              showTotal: true,
              alwaysShowAllBtns: true,
            })}
          ></BootstrapTable>


  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "data_",
      text: "Data",
    },
    {
      dataField: "nome",
      text: "Nome",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "cognome",
      text: "Cognome",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "tipo",
      text: "Tipo",
    },
    {
      dataField: "disp",
      text: "Dispositivo",
    },
    {
      dataField: "marca",
      text: "Marca",
    },
    {
      dataField: "modello",
      text: "Modello",
    },
    {
      dataField: "seriale",
      text: "Seriale",
    },
    {
      dataField: "firma",
      text: "Firma",
    },
    {
      dataField: "remove",
      text: "delete",
      formatter: (cellContent, row) => {
        return (
          <button
            className="btn btn-danger btn-xs"
            onClick={() => {
              console.log(row);
              deleteRow(row.id);
            }}
          >
            Delete
          </button>
        );
      },
    },
  ];


        

*/
