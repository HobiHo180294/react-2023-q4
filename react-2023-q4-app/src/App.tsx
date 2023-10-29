import { Component } from 'react';

export default class App extends Component {
  throwError = () => {
    throw new Error('Error');
  };

  render() {
    return (
      <h1>
        <button onClick={this.throwError()}>Hello</button>
      </h1>
    );
  }
}

// ! Need to revise
