import React from "react";
import MemList from "../components/memList";
import BeatifullPolishLanguage from '../Gallery/BeatifullPolishLanguage.jpg'
import Depression from '../Gallery/Depression.jpg'
import Kulfon from '../Gallery/Kulfon.jpeg'
import Mask from '../Gallery/Mask.jpg'
import TheBestThings from '../Gallery/TheBestThings.jpg'
import WomanAndClass from '../Gallery/WomanAndClass.jpg'
class Memy extends React.Component {

  render() {
    return (
      <div>
        <h1> Poznajcie nasze memy! </h1>
        <MemList />

      
      </div>)
  }
}




export default Memy; 