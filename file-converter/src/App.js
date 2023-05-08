import React from "react";
import { Link, Route, Routes} from "react-router-dom";
import { ExportTableExcel } from "./pages/ExportTableExcel";
import DragAndDrop from "./pages/DragAndDrop";

import HomePage from "./pages/HomePage";
import GetFakeApi from "./pages/GetFakeApi";


export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dragndrop" element={<DragAndDrop />} />
        <Route path="/esportazione" element={<ExportTableExcel />} />
        <Route path="/fakeApi" element={<GetFakeApi/>}/>
      
      </Routes>
    </div>
  );
};
/*
                <Link to="/esportazione" className="list nav-link">
                  ESPORTAZIONE
                </Link>
                
riga 27 da mettere in caso

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
     <Link to="/" classNameName="navbar-brand">
            <img src ={aubay} alt="logo"  width="60" height="60"></img>HOMEPAGE
            </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
           <Link to="/esportazione" classNameName="list nav-link">
                    ESPORTAZIONE
                  </Link>
           <Link to="/dragandrop" classNameName="list nav-link">
                    ESPORTAZIONE
                  </Link>
      </ul>
    </div>
  </div>
</nav>

*/
