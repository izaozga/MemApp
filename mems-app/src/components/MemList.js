import React from "react";

class MemList extends React.Component {
    state = {

        elements: [
            {
                title: "Piękny język polski",
                img: "../Gallery/BeatifullPolishLanguage.jpg"
            },
            {
                title: "Smuteczek",
                img: "../Gallery/Depression.jpg"
            },
            {
                title: "Oto jest pytanie!",
                img: "../Gallery/Kulfon.jpeg"
            },
            {
                title: "Już wiesz?",
                img: "../Gallery/Mask.jpg"
            },
            {
                title: "Do przemyślenia!",
                img: "../Gallery/TheBestThings.jpg"
            },
            {
                title: "Portret kobiety z klasą",
                img: "../Gallery/WomanAndClass.jpg"
            },

        ]

    }
    render() {
        let elements = this.state.elements.map(e => {
            return <div key={e.title}>{e.title}</div>
        })
        return (
            <div>
                {elements}
            </div>
        )
    }
}

export default MemList