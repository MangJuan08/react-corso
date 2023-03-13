import { Card } from "./Card";

const products = [
  {
    id: 0,
    nome: "Colnago V3Rs",
    prezzo: "6.0000",
    img: process.env.PUBLIC_URL + "/images/colnagov3rs.jpg",
  },
  {
    id: 1,
    nome: "Colnago V3",
    prezzo: "3.000",
    img: process.env.PUBLIC_URL + "/images/colnagov3.jpg",
  },
  {
    id: 2,
    nome: "Colnago V4",
    prezzo: "3.000",
    img: process.env.PUBLIC_URL + "/images/colnagov3.jpg",
  },
  {
    id: 3,
    nome: "Colnago V5",
    prezzo: "3.000",
    img: process.env.PUBLIC_URL + "/images/colnagov3.jpg",
  },
  {
    id: 4,
    nome: "Colnago V6",
    prezzo: "3.000",
    img: process.env.PUBLIC_URL + "/images/colnagov3.jpg",
  },
  {
    id: 5,
    nome: "Colnago V7",
    prezzo: "3.000",
    img: process.env.PUBLIC_URL + "/images/colnagov3.jpg",
  },
  {
    id: 6,
    nome: "Colnago V8",
    prezzo: "3.000",
    img: process.env.PUBLIC_URL + "/images/colnagov3.jpg",
  },
  {
    id: 7,
    nome: "Colnago V9",
    prezzo: "3.000",
    img: process.env.PUBLIC_URL + "/images/colnagov3.jpg",
  },
];

function App() {
  //spread operator -> passare i valori in modo semplice
  // const numeri = [1,2,3,4,5];
  // console.log(Math.max(...numeri))
  //props.children-> tutto il contenuto dall'apertura e chiusa del tag del componente
  //key => serve per far rendere univoco l'oggetto
  return (
    <div className="container">
      <br></br>

      <div className="row">
        {products.map((products) => {
          return (
            <Card {...products} key={products.id}>
              <>BELLA BICI!</>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
/*

<Card {...primaCard}>
            <button type="button" className="btn btn-primary">
              Dettagli
            </button>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card {...secondoCard}>
            <button type="button" className="btn btn-primary">
              Dettagli
            </button>
          </Card>

*/
