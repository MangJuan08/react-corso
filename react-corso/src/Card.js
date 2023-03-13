import React from "react";

export const Card = ({ nome, prezzo, img, id, children }) => {
  //decostruzione è l'oppost dello spread operator
  //dichiarare le chiavi che corrispondo alle valori

  ///decostruzione const {nome,prezzo, img, children} = props;
  const prova = (ids) => {
    console.log(ids);
  };
  return (
    <div className="col-md-3">
      <div className="card" style={{ marginTop: 20 }}>
        <div className="card-body">
          <h5 className="card-title text-uppercase">{nome}</h5>
          <img src={img} alt="Bike" width="260" height="150"></img>
          <br></br> <br></br>
          <hr></hr>
          <p>
            <b>€{prezzo}</b>
          </p>
          <p>{children}</p>
          <button
            type="button"
            onClick={() => prova(prezzo)}
            className="btn btn-primary"
          >
            Dettagli
          </button>
        </div>
      </div>
    </div>
  );
};
