import React, { Component } from 'react'
import Cat from './Cat'

import defunktocat from '../images/defunktocat.jpg'
import dojocat from '../images/dojocat.jpg'
import picat from '../images/jean-luc-picat.jpg'
import megaCat from '../images/megaCat.jpg'
import nyantocat from '../images/nyantocat.gif'
import trekkie from '../images/trekkie.jpg'
import blackto from '../images/blacktocats.png'
import boxer from '../images/boxertocat_octodex.jpg'
import brenna from '../images/Brennatocat.png'
import film from '../images/filmtocats.png'
import fin from '../images/Fintechtocat.png'
import hula from '../images/hula_loop_octodex03.gif'





const catArr = [
  {
    imageUrl: defunktocat,
    imageAlt: 'defunktocat',
    number: '#1',
    name: 'Defunctocat'
  },
  {
    imageUrl: dojocat,
    imageAlt: 'dojocat',
    number: '#2',
    name: 'DojoCat'
  },
  {
    imageUrl: picat,
    imageAlt: 'picat',
    number: '#3',
    name: 'Picat'
  },
  {
    imageUrl: megaCat,
    imageAlt: 'mega-cat',
    number: "#4", 
    name: 'Megacat'
  },
  {
    imageUrl: nyantocat,
    imageAlt: 'nyantocat',
    number: `#5`,
    name: 'Nyantocat'
  },
  {
    imageUrl: trekkie,
    imageAlt: 'trekkie',
    number: `#6`,
    name: 'Trekkie'
  },
  {
    imageUrl: blackto,
    imageAlt: 'blackto',
    name: 'Blacktocat',
    number: `#7`
  },
  {
    imageUrl: boxer,
    imageAlt: 'boxer',
    name: 'boxer',
    number: '#8'
  },
  {
    imageUrl: brenna,
    imageAlt: 'brenna',
    name: 'brenna'
    
  },
  {
    imageUrl: film,
    imageAlt: 'film',
    name: 'FilmtoCat'
  },
  {
    imageUrl: fin,
    imageAlt: 'fin', 
    name: 'Fintocat'
  },
  {
    imageUrl: hula,
    imageAlt: 'hula',
    name: 'HulaCat'
  }, 
  
]

class FavoriteCats extends Component {
  render() {
    return (
      <ul>
        {catArr.map(cats => {
          return (
            <Cat
              imageUrl={cats.imageUrl}
              imageAlt={cats.imageAlt}
              number={cats.number}
              name={cats.name}
            />
          )
        })}
      </ul>
    )
  }
}

export default FavoriteCats
