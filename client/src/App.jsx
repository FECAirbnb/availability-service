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
      data: null,
      locationId: 1
    };
    this.bookDates = this.bookDates.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/reserve/${this.state.locationId}`)
      .then(result => {
        this.setState({
          data: result.data[0]
        });
      })
      .catch(err => {
        throw err;
      });
  }

  updateState() {
    axios
      .get(`/api/reserve/${this.state.locationId}`)
      .then(result => {
        console.log(result);
        // this.setState({
        //   data: result.data[0]
        // });
      })
      .catch(err => {
        throw err;
      });
  }

  bookDates() {
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    axios
      .get(`/api/reserve/dates/:${checkIn}:${checkOut}`)
      .then(result => {
        return result.data;
      })
      .then(dates => {
        const locationId = this.state.locationId;
        axios.post(`/api/reserve/book/${this.state.locationId}`, {
          dates,
          locationId
        });
      })
      .catch(err => {
        throw err;
      });
    this.updateState();
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
