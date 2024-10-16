import React from "react";

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
          src={this.props.details.imageUrl}
          alt={this.props.details.name}
          onClick={() => {
            this.props.handleCardClick(this.props.details);
          }}
        />
      </div>
    );
  }
}
