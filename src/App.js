import React from "react";

import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";

import GlobalStyle from "./components/GlobalStyle";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;
