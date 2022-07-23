import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/Header";

function App(): JSX.Element {
  return (

      <div>
            <Header/>
      </div>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
