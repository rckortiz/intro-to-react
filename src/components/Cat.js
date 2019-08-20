import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
        <section>
          <h2>{this.props.artistName}</h2>
          <q>{this.props.number}</q>
        </section>
      </li>
    )
  }
}
export default Cat
