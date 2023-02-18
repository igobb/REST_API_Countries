import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (<>
  <Header />
  <div className="App">
      
      
      <MainRoutes />
    </div>
  </>
    
  );
}

export default App;
