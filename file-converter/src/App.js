import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ExportTableExcel } from "./pages/ExportTableExcel";
import Assegnazione from "./pages/Assegnazione";
import { Restituzione } from "./pages/Restituzione";
import HomePage from "./pages/HomePage";
import DragAndDrop from "./pages/DragAndDrop";


export const App = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/assegnazione" className="list nav-link">
                    ASSEGNAZIONE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/restituzione" className="list nav-link">
                    RESTITUZIONE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/esportazione" className="list nav-link">
                    ESPORTAZIONE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dragndrop" className="list nav-link">
                    DRAG AND DROP
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/assegnazione" element={<Assegnazione />} />
          <Route path="/restituzione" element={<Restituzione />} />
          <Route path="/esportazione" element={<ExportTableExcel />} />
          <Route path="/dragndrop" element={<DragAndDrop/>}/>
        </Routes>
      </div>
    </div>
  );
};
