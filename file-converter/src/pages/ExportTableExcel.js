import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { nanoid } from "nanoid";
import { toast, Toaster } from "react-hot-toast";
import FormRecordFill from "../components/FormRecordFill";
import { Table } from "../components/Table";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
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
      sort:true,
      filter:textFilter()
    },
    {
      dataField: "cognome",
      text: "Cognome",
      sort:true,
      filter:textFilter()
    },
    {
      dataField:"tipo",
      text:"Tipo"
    },
    {
      dataField: "disp",
      text: "Dispositivo",
    },
    {
      dataField:"marca",
      text:"Marca"
    },
    {
      dataField: "modello",
      text: "Modello",
    },
    {
      dataField:"seriale",
      text:"Seriale"
    },
    {
      dataField:"firma",
      text:"Firma"
    },
    
  ];

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
      setData(newDa);
      toast.success("RECORD ADDED SUCCESSFULLY");
    }
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
    toast.success("RECORD DELETED SUCCESSFULLY");
  };

  const clearTable = () => {
    if (datas.length > 0) setData([]);
    else alert("TABELLA VUOTA");
  };

  const clearForm = () => {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-filetype-xls"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM6.472 15.29a1.176 1.176 0 0 1-.111-.449h.765a.578.578 0 0 0 .254.384c.07.049.154.087.25.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.625.625 0 0 0-.247-.181.923.923 0 0 0-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 0 0-.184.384c0 .121.048.22.143.3a.97.97 0 0 0 .405.175l.62.143c.217.05.406.12.566.211a1 1 0 0 1 .375.358c.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-2.945-3.358h-.893L1.81 13.37h-.036l-.832-1.438h-.93l1.227 1.983L0 15.931h.861l.853-1.415h.035l.85 1.415h.908L2.253 13.94l1.274-2.007Zm2.727 3.325H4.557v-3.325h-.79v4h2.487v-.675Z"
          />
        </svg>{" "}
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
    </div>
  );
};
/*
  <Table datas={datas} deleteRow={deleteRow}></Table>


*/