import React, { Component } from 'react'
import FavoriteCats from './components/favoriteCats'

class App extends Component {
  render() {
    console.log('Hey,Rick')
    return (
      <main>
        <header>
          <nav className="navigation">
            <a className="octodex" href="">
              Octodex
            </a>
            <a className="home" href="">
              Home
            </a>
            <a className="faq" href="">
              FAQ
            </a>
            <a className="twitter" href="">
              Follow us on Twitter
            </a>
            <a className="github" href="">
              Back to Github.com
            </a>
          </nav>
        </header>
        <section className="image-container">
          <FavoriteCats />
        </section>
      </main>
    )
  }
}

export default App
