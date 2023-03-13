import React from "react";

export const Card = ({ nome, prezzo, img, children, key }) => {
  console.log(key)
  //decostruzione è l'oppost dello spread operator
  //dichiarare le chiavi che corrispondo alle valori

  ///decostruzione const {nome,prezzo, img, children} = props;

  return (
    <div className="col-md-3">
      <div className="card" style={{ marginTop: 20 }}>
        <div className="card-body">
          <h5 className="card-title text-uppercase">{nome}</h5>
          <img src={img} alt="Bike" width="150" height="100"></img>
          <br></br> <br></br>
          <p>€{prezzo}</p>
          <p>{children}</p>
          <button type="button" className="btn btn-primary">
            Dettagli
          </button>
        </div>
      </div>
    </div>
  );
};
