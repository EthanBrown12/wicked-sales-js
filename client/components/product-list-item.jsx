import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.setView('details', { productId: this.props.productId });
  }

  render() {
    return (
      <div className="col-sm-4 p-3"
        onClick = {this.handleClick}
        style={{ cursor: 'pointer ' }}>
        <div className="card h-75">
          <img src={this.props.image} alt={this.props.name} className="card-img-top h-50" />
          <div className="card-body">
            <p className="card-title font-weight-bold">{this.props.name}</p>
            <p className="card-subtitle text-muted mb-1">${this.props.price}</p>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
