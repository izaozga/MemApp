import React from "react";

class MemList extends React.Component {

    state = {
        pictures: [
            { title: "Piękny język polski", upvotes: 6, downvotes: 0, img: "../assets/BeatifullPolishLanguage.jpg" },
            { title: "Smuteczek", upvotes: 4, downvotes: 0, img: "../assets/Depression.jpg" },
            { title: "Oto jest pytanie!", upvotes: 7, downvotes: 2, img: "../assets/Kulfon.jpeg" },
            { title: "Już wiesz?", upvotes: 2, downvotes: 3, img: "../assets/Mask.jpg" },
            { title: "Do przemyślenia!", upvotes: 8, downvotes: 0, img: "../assets/TheBestThings.jpg" },
            { title: "Portret kobiety z klasą", upvotes: 6, downvotes: 1, img: "../assets/WomanAndClass.jpg" }
        ]
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default MemList