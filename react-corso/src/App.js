import { Card } from "./Card";
import { Component1 } from "./Component1";

const primaCard = {
  nome: "Prima Card",
  prezzo: 25,
};

const secondoCard = {
  nome: "Secondo Card",
  prezzo: 19,
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
          <Card nome={primaCard.nome} prezzo={primaCard.prezzo} />
        </div>
        <div className="col-sm-2">
          <Card nome={secondoCard.nome} prezzo={secondoCard.prezzo} />
        </div>
      </div>
    </div>
  );
}



export default App;
