import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/Header";
import Menu from "./components/menu/Menu/Menu";

function App(): JSX.Element {
  return (

      <div>
            <Header/>
            {/* TODO ABOUT */}
            <Menu />
            {/* TODO CART */}
            {/* TODO FOOTER? */}
      </div>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
