import React from 'react'
import { useNavigate  } from "react-router-dom";

const Protected = ({isLoggedIn, children}) => {
    const navigate = useNavigate();
      if (!isLoggedIn) {
            return navigate("/");
          }
          return children;
}

export default Protected