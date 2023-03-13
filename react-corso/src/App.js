import { Card } from "./Card";


const primaCard = {
  nome: "Prima Card",
  prezzo: 25,
};

const secondoCard = {
  nome: "Secondo Card",
  prezzo: 19,
};

function App() {
  //spread operator -> passare i valori in modo semplice
  // const numeri = [1,2,3,4,5];
  // console.log(Math.max(...numeri))
  return (
    <div className="container">
      <br></br>

      <div className="row">
        <div className="col-sm-2">
          <Card {...primaCard} />
        </div>
        <div className="col-sm-2">
          <Card {...secondoCard} />
        </div>
      </div>
    </div>
  );
}

export default App;
