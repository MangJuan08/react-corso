import { CardComponent } from "./CardComponent";
import { Component1 } from "./Component1";

function App() {
  return (
    <div className="container">
      <p>CIAO!</p>
      <Component1></Component1>
      <br></br>
      <div className="row">
        <div className="col-sm-2">
          <CardComponent />
        </div>
        <div className="col-sm-2">
          <CardComponent />
        </div>
        <div className="col-sm-2">
          <CardComponent />
        </div>
        <div className="col-sm-2">
          <CardComponent />
        </div>
        <div className="col-sm-2">
          <CardComponent />
        </div>
        <div className="col-sm-2">
          <CardComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
