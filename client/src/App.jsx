/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Reserve from './components/Reserve.jsx';
import styles from './style.module.css';

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
          data: result.data
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
        this.setState({
          data: result.data
        });
      })
      .catch(err => {
        throw err;
      });
  }

  bookDates() {
    const checkIn = document.getElementById('check-in').textContent;
    const checkOut = document.getElementById('check-out').innerText;
    let checkInDate = new Date(checkIn);
    let checkOutDate = new Date(checkOut);

    checkInDate = checkInDate.toISOString();
    checkOutDate = checkOutDate.toISOString();
    axios
      .get(`/api/reserve/dates/:${checkInDate}:${checkOutDate}`)
      .then(result => {
        return result.data;
      })
      .then(dates => {
        const { locationId } = this.state;
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
    return (
      <div>
        <Reserve onClick={this.bookDates} state={this.state} />
      </div>
    );
  }

  render() {
    return <div className={styles.main}>{this.renderView()}</div>;
  }
}

export default App;
