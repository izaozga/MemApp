import React from "react";
import MemList from "../components/memList";



class PopularneMemy extends React.Component {
    render() {
      return (
        <div>
          <h1> A te memy najbardziej lubicie! </h1>
          <MemList />
        </div>
      );
    }
  }
  
  export default PopularneMemy;