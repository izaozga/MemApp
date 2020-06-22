import React from "react";
import BeatifullPolishLanguage from "../Gallery/BeatifullPolishLanguage.jpg";
import Depression from "../Gallery/Depression.jpg";
import Kulfon from "../Gallery/Kulfon.jpeg";
import Mask from "../Gallery/Mask.jpg";
import TheBestThings from "../Gallery/TheBestThings.jpg";
import WomanAndClass from "../Gallery/WomanAndClass.jpg";



const ListOfMems = (props) => {

    return (
        <li>
            <div>
                
                <div>{props.title}</div>
                <div>{props.img}</div>
                
            </div>

            <button> Lubię to! </button>
            <button> Nie lubię tego! </button>
        </li>
    )
}

class MemList extends React.Component {
    state = {

        elements: [
            {
                title: "Piękny język polski",
                img: <img alt="Wyraz dżdżownica w kilku językach" src={BeatifullPolishLanguage} />,
                vote: 0
                
            },
            {
                title: "Smuteczek :-(",
                img: <img alt="Zakaz narzekania" src={Depression} />,
                vote: 0,
                
            }, 
            {
                title: "Oto jest pytanie!",
                img:  <img alt="Kulfon sprawdza, co z nas wyrosło" src={Kulfon} />,
                vote: 0
            },
            {
                title: "Już wiesz?",
                img:  <img alt="Powód noszenia maseczki" src={Mask} />,
                vote: 0

            },
            {
                title: "Do przemyślenia!",
                img: <img alt="Lista ważnych rzeczy, które są za darmo" src={TheBestThings} />,
                vote: 0

            },
            {
                title: "To jest kobieta z klasą!",
                img:  <img alt="Portret kobiety z klasą" src={WomanAndClass} />,
                vote: 0
            },

        ]

    }
    render() {
        return (
            <ul> 
                {this.state.elements.map(listOfMems => <ListOfMems key = {listOfMems.title}
                title = {listOfMems.title}
                img = {listOfMems.img}
                
                />)}
            </ul>
        )
    }

}


export default MemList
