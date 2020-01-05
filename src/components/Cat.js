import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <li>
        <img
          className="images"
          src={this.props.imageUrl}
          alt={this.props.imageAlt}
        />
        <section>
          <h2>{this.props.number}</h2>
          <span>{this.props.name}</span>
        </section>
      </li>
    )
  }
}
export default Cat
