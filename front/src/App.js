import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
