import { Component1 } from "./Component1";

const primaCard = {
  nome: "Prima Card",
  prezzo: 25,
};

const secondoCard = {
  nome: "Secondo Card",
  prezzo: 15,
};

function App() {
  return (
    <div className="container">
      <br></br>
      <br />
      <p>CIAO!</p>
      <Component1></Component1>
      <br></br>
      <div className="row">
        <div className="col-sm-2">
          <CardComponent nome={primaCard.nome} prezzo={primaCard.prezzo} />
        </div>
        <div className="col-sm-2">
          <CardComponent nome={secondoCard.nome} prezzo={secondoCard.prezzo} />
        </div>
      </div>
    </div>
  );
}

const CardComponent = (props) => {
 
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.nome}</h5>
        <p>
        €{props.prezzo}
        </p>
      </div>
    </div>
  );
};

export default App;
