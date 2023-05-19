import React, { useState } from "react";
import { Link, Route, Routes} from "react-router-dom";
import { ExportTableExcel } from "./pages/ExportTableExcel";
import DragAndDrop from "./pages/DragAndDrop";

import HomePage from "./pages/HomePage";
import GetFakeApi from "./pages/GetFakeApi";
import Protected from "./components/Protected";
import Profile from "./pages/Profile";

const userLogin = {
  username: "Kamren",
  password: "demarco.info",
};
export const App = () => {

    const [isLoggedIn, setisLoggedIn] = useState(null);
    

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dragndrop" element={<DragAndDrop />} />
        <Route path="/esportazione" element={<ExportTableExcel />} />
        <Route path="/fakeApi" element={<GetFakeApi/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
};
