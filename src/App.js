import React, { Component } from 'react'
import FavoriteCats from './components/favoriteCats'
import GithubLogo from './images/githubLogo.png'

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
            <img className="githubLogo" src={GithubLogo} />
            <a className="twitter" href="https://twitter.com/githubdesign">
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
