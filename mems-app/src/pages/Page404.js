import React from "react";
import Img404 from "../assets/page404.png";

const Page404 = () => {
    return (
      <div>
        <h1> Strona, której szukasz nie została znaleziona. Spójrz na ekran i uśmiechnij się!</h1>
        <img alt="404 obrazek" src={Img404} />
      </div>
    );
  };
  
  export default Page404;