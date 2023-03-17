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
          {datas.map((item, index) => {
          
            return (
              <tr key={index}>
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
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRow(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

/*
      <th scope="col">index</th>
          <th scope="col">id</th>
 <td>{index}</td>
                <td>{item.id}</td>

                */
