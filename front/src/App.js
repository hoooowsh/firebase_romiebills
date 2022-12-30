import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  console.log("asdf");
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
