import React, { Component } from 'react'
import Cat from './Cat'

import defunktocat from '../images/defunktocat.jpg'
import dojocat from '../images/dojocat.jpg'
import picat from '../images/jean-luc-picat.jpg'
import megaCat from '../images/megaCat.jpg'
import nyantocat from '../images/nyantocat.gif'
import trekkie from '../images/trekkie.jpg'

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
