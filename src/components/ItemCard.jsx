import React from "react";
import "../blocks/card.css";

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-item">
        <div className="card-item__text-wrapper">
          <p className="card-item__text">{this.props.details.name}</p>
        </div>
        <img
          className="card-item__card-image"
          src={this.props.details.link}
          alt={this.props.details.name}
        />
      </div>
    );
  }
}
