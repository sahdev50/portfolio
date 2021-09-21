import React from "react";

//global styles
import { GlobalStyles } from "./components/GlobalStyles";

//pages
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <AboutUs />
    </div>
  );
};

export default App;
