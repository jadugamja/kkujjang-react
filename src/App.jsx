import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="content">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route></Route>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
