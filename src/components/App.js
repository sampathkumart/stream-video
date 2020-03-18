import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const page1 = () => {
  return <div>one</div>;
};

const page2 = () => {
  return <div>two</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={page2} />
          <Route path="/page1" component={page1} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
