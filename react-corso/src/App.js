import { Card } from "./Card";
import products from "./Products";



function App() {
  //spread operator -> passare i valori in modo semplice
  // const numeri = [1,2,3,4,5];
  // console.log(Math.max(...numeri))
  //props.children-> tutto il contenuto dall'apertura e chiusa del tag del componente
  //key => serve per far rendere univoco un'item, l'utilizzo del key è per cambiare,aggiornare o eliminare un item ell'array
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
