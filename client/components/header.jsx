import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="bg-dark mb-5">
        <p className="text-white">$ Wicked Sales</p>
        <p className="container text-white font-weight-bold pt-4 ml-sm-5 ml-2"
          onClick={() => this.props.setView('catalog', {})}> </p>
        <img />
      </div>
    );
  }
}
