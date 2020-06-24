import React from 'react'
import BeatifullPolishLanguage from '../Gallery/BeatifullPolishLanguage.jpg'
import Depression from '../Gallery/Depression.jpg'
import Kulfon from '../Gallery/Kulfon.jpeg'
import Mask from '../Gallery/Mask.jpg'
import TheBestThings from '../Gallery/TheBestThings.jpg'
import WomanAndClass from '../Gallery/WomanAndClass.jpg'

const initMemsList = [
  {
    id: 1,
    title: 'Piękny język polski',
    img: (
      <img
        alt="Wyraz dżdżownica w kilku językach"
        src={BeatifullPolishLanguage}
      />
    ),
    votes: 0,
  },
  {
    id: 2,
    title: 'Smuteczek :-(',
    img: <img alt="Zakaz narzekania" src={Depression} />,
    votes: 0,
  },
  {
    id: 3,
    title: 'Oto jest pytanie!',
    img: <img alt="Kulfon sprawdza, co z nas wyrosło" src={Kulfon} />,
    votes: 0,
  },
  {
    id: 4,
    title: 'Już wiesz?',
    img: <img alt="Powód noszenia maseczki" src={Mask} />,
    votes: 0,
  },
  {
    id: 5,
    title: 'Do przemyślenia!',
    img: (
      <img alt="Lista ważnych rzeczy, które są za darmo" src={TheBestThings} />
    ),
    votes: 0,
  },
  {
    id: 6,
    title: 'To jest kobieta z klasą!',
    img: <img alt="Portret kobiety z klasą" src={WomanAndClass} />,
    votes: 0,
  },
]

class MemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mems: initMemsList }
  }

  clickedLike(memId) {
    this.setState({
      mems: this.state.mems.map((mem) => {
        if (mem.id === memId) {
          return { ...mem, votes: mem.votes + 1 }
        }
        return mem
      }),
    })
    console.log('Polubiono')
  }

  clickedUnlike(memId) {
      this.setState({
          mems: this.state.mems.map((mem)=>{
              if (mem.id === memId && mem.votes>0) {
                  return { ...mem, votes: mem.votes - 1}
              }
              return mem
          })
      })

            
            
      
    console.log('Odebrano głos')}
  

  render() {
    const Mems = this.state.mems.map((mem) => {
      return (
        <div key={mem.title}>
          <div> {mem.title}</div>
          <div>{mem.img}</div>
          <div>{mem.votes}</div>
          <div>
            <button onClick={() => this.clickedLike(mem.id)}>Lubię to!</button>
            <button onClick={() => this.clickedUnlike(mem.id)}>Nie lubię tego!</button>
          </div>
        </div>
      )
    })

    return <ul>{Mems}</ul>
  }
}

export default MemList