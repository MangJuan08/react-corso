import React from "react";

export const ExportTableExcel = () => {
  return (
    <div className="container">
           <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div className="row">
     
        <div className='="col-md-12'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Nome</th>
                <th scope="col">Seriale</th>
                <th scope="col">Modello</th>
                <th scope="col">Marca</th>
                <th scope="col">Tipo</th>
                <th scope="col">Firma</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      ExportTableExcel
    </div>
  );
};
