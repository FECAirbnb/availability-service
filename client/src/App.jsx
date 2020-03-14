/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reserve from './components/Reserve.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.bookDates = this.bookDates.bind(this);
  }

  componentDidMount() {
    axios
      .get('/hi')
      .then(result => {
        this.setState({
          data: result.data[0]
        });
      })
      .catch(err => {
        throw err;
      });
  }

  bookDates() {
    const checkIn = document.getElementById('check-in');
    const checkOut = document.getElementById('check-out');

    console.log(`${checkOut.value} and ${checkIn.value}`);
  }

  renderView() {
    if (this.state.data === null) {
      return <div> No locations </div>;
    }
    return <Reserve loc={this.state.data} onClick={this.bookDates} />;
  }

  render() {
    return <div className="main">{this.renderView()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('reserve'));
