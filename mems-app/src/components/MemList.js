import React from "react";
import BeatifullPolishLanguage from "../Gallery/BeatifullPolishLanguage.jpg";
import Depression from "../Gallery/Depression.jpg";
import Kulfon from "../Gallery/Kulfon.jpeg";
import Mask from "../Gallery/Mask.jpg";
import TheBestThings from "../Gallery/TheBestThings.jpg";
import WomanAndClass from "../Gallery/WomanAndClass.jpg";







class MemList extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {


        elements: [
            {
                title: "Piękny język polski",
                img: <img alt="Wyraz dżdżownica w kilku językach" src={BeatifullPolishLanguage} />,
                votes: 0,

            },
            {
                title: "Smuteczek :-(",
                img: <img alt="Zakaz narzekania" src={Depression} />,
                votes: 0


            },
            {
                title: "Oto jest pytanie!",
                img: <img alt="Kulfon sprawdza, co z nas wyrosło" src={Kulfon} />,
                vote: 0
            },
            {
                title: "Już wiesz?",
                img: <img alt="Powód noszenia maseczki" src={Mask} />,
                votes: 0

            },
            {
                title: "Do przemyślenia!",
                img: <img alt="Lista ważnych rzeczy, które są za darmo" src={TheBestThings} />,
                votes: 0

            },
            {
                title: "To jest kobieta z klasą!",
                img: <img alt="Portret kobiety z klasą" src={WomanAndClass} />,
                votes: 0
            },

        ]

    }


    render() {
        const photoMems = this.state.elements.map(e => {
            return (
                <ul key={e.title}>
                    <div>{e.title}</div>
                    <div>{e.img} </div>

                    <div>
                        <div><button>Lubię to!</button></div>
                        <div>{e.votes}</div>
                        <div><button>Nie lubię tego!</button></div>
                    </div>
                </ul>
            )
        })

        return (
            <ul>
                {photoMems}

            </ul>
        )
    }

}


export default MemList
