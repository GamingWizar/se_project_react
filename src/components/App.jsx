import { useState } from "react";
import "../blocks/App.css";
import "../blocks/body.css";
import "../blocks/page.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App(props) {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
