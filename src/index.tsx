import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/Header";
import RecipeList from "./components/recipes/RecipeList/RecipeList";

function App(): JSX.Element {
  return (

      <div>
            <Header/>
            <RecipeList />
      </div>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
