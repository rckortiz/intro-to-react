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
    imageAlt: 'defunktocat'
  },
  {
    imageUrl: dojocat,
    imageAlt: 'dojocat'
  },
  {
    imageUrl: picat,
    imageAlt: 'picat'
  },
  {
    imageUrl: megaCat,
    imageAlt: 'mega-cat'
  },
  {
    imageUrl: nyantocat,
    imageAlt: 'nyantocat'
  },
  {
    imageUrl: trekkie,
    imageAlt: 'trekkie'
  },
  {
    imageUrl: blackto,
    imageAlt: 'blackto'
  },
  {
    imageUrl: boxer,
    imageAlt: 'boxer'
  },
  {
    imageUrl: brenna,
    imageAlt: 'brenna'
  },
  {
    imageUrl: film,
    imageAlt: 'film'
  },
  {
    imageUrl: fin,
    imageAlt: 'fin'
  },
  {
    imageUrl: hula,
    imageAlt: 'hula'
  }
]

class FavoriteCats extends Component {
  render() {
    return (
      <ul>
        {catArr.map(cats => {
          return <Cat imageUrl={cats.imageUrl} imageAlt={cats.imageAlt} />
        })}
      </ul>
    )
  }
}

export default FavoriteCats
