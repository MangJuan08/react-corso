import React from "react";

const FormRecordFill = ({
  datas,
  formData,
  onValChange,
  deleteRow,
  addRow,
  clearForm

}) => {
  const tipo_operazione = ["R", "A"];
  const dispositivo = ["PC", "CELL"];
  const marca = [
    "SAMSUNG",
    "IPHONE",
    "MOTOROLA",
    "HUAWEI",
    "ACER",
    "DELL",
    "LENOVO",
    "TOSHIBA",
    "FUJITSU",
    "HP"
  ];
  const firma = ["SI", "NO"];
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              name="data_"
              value={formData.data_}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="DATA"
            />
          </div>
          <div className="col-md-4">
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
          <div className="col-md-4">
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
          <div className="col-md-4">
            <select
              onChange={onValChange}
              name="tipo"
              value={formData.tipo}
              className="form-control form-control-sm"
            >
              <option>-TIPO-</option>
              {tipo_operazione.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </select>
          </div>

          <div className="col-md-4">
            <select
              onChange={onValChange}
              name="disp"
              value={formData.disp}
              className="form-control form-control-sm"
            >
              <option>-DISPOSITIVO-</option>
              {dispositivo.map((dispositivo, index) => {
                return <option key={index}>{dispositivo}</option>;
              })}
            </select>
          </div>
          <div className="col-md-4">
            <select
              onChange={onValChange}
              name="marca"
              value={formData.marca}
              className="form-control form-control-sm"
            >
              <option>-MARCA-</option>
              {marca.map((marca, index) => {
                return <option key={index}>{marca}</option>;
              })}
            </select>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              name="modello"
              value={formData.modello}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="MODELLO"
            />
          </div>
          <div className="col-md-6">
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
          <div className="col-md-12">
            <select
              onChange={onValChange}
              name="firma"
              value={formData.firma}
              className="form-control form-control-sm"
            >
              <option>-FIRMA-</option>
              {firma.map((firma, index) => {
                return <option key={index}>{firma}</option>;
              })}
            </select>
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-md-4 ">
            <button
              onClick={(e) => addRow(e)}
              className="btn btn-primary form-control"
            >
              AGGIUNGI RECORD
            </button>
          </div>
          <div className="col-md-4 ">
            <button
              onClick={() => clearForm()}
              className="btn btn-primary form-control"
            >
              CLEAR FORM
            </button>
          </div>
        
        </div>
      </form>

      <br></br>
    </div>
  );
};

export default FormRecordFill;
/*   <input
              type="text"
              name="tipo"
              value={formData.tipo}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="TIPO"
            />
            
            

 
            
            */
