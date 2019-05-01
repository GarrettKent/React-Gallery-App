import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
    <div className="not-found">
      <h3>404</h3>
      <p>This page does not exist.</p>
    </div>
    );
  }
}

export default Error;