import React, { useEffect } from "react";

const FormRecordFill = ({
  datas,
  formData,
  onValChange,
  deleteRow,
  addRow,
  clearForm
}) => {
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
            <input
              type="text"
              name="tipo"
              value={formData.tipo}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="TIPO"
            />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              name="disp"
              value={formData.disp}
              onChange={onValChange}
              className="form-control form-control-sm"
              placeholder="DISPOSITIVO"
            />
          </div>
          <div className="col-md-4">
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
