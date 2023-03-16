import React from "react";

export const Table = ({ datas, deleteRow }) => {
  return (
    <div>
      {" "}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Tipo</th>
            <th scope="col">Dispositivo</th>
            <th scope="col">Marca</th>
            <th scope="col">modello</th>
            <th scope="col">Seriale</th>
            <th scope="col">Firma</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.data_}</td>
                <td>{item.nome}</td>
                <td>{item.cognome}</td>
                <td>{item.tipo}</td>
                <td>{item.disp}</td>
                <td>{item.marca}</td>
                <td>{item.modello}</td>
                <td>{item.seriale}</td>
                <td>{item.firma}</td>
                <td>
                  <button onClick={() => deleteRow(item.id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
