import React from "react";

const style1 = {
  textAlign: "left",
};
const style2 = {
  textAlign: "right",
};
const DragAndDropTable = ({ tableData, deleteRow, onChangeInput }) => {
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

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Tipo</th>
            <th scope="col">Dispositivo</th>
            <th scope="col">Marca</th>
            <th scope="col">Modello</th>
            <th scope="col">Seriale</th>
            <th scope="col">Firma</th>
            <th scope="col">Operazione</th>
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
      </table>
    </div>
  );
};

export default DragAndDropTable;
