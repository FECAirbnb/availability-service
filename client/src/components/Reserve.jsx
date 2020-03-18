/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Calendar from './Calendar.jsx';

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      open: false,
      checkIn: 'Check in',
      checkOut: 'Check out'
    };

    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  handleDropdownClick() {
    this.setState(state => {
      return {
        open: true
      };
    });
  }

  handleOutsideClick(e) {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false
      });
    }
  }

  handleDateChange(date) {
    if (this.state.checkIn === 'Check in') {
      this.setState({
        checkIn: date
      });
    } else {
      this.setState({
        checkOut: date
      });
    }
  }

  render() {
    return (
      <div className="reserve" ref={this.container}>
        <div>
          <span className="price">${this.props.state.data[0].price}</span>
          <span className="per-night"> per night</span>
        </div>
        <div>
          <span role="img" aria-label="Rating 1 out of 5" className="_m5wjo84">
            4.99
          </span>
          <span className="per-night">(6 reviews)</span>
        </div>
        <div className="date-picker">
          <div id="check-in" onClick={this.handleDropdownClick}>
            {this.state.checkIn}
          </div>

          <div id="check-out" onClick={this.handleDropdownClick}>
            {this.state.checkOut}
          </div>
          <div className="dropdown-content"></div>
        </div>
        <div>
          {this.state.open && (
            <div className="dropdown">
              <Calendar state={this.props.state} handleDateChange={this.handleDateChange} />
            </div>
          )}
        </div>
        <div className="dropdown">
          <button className="dropbtn">1 Guest</button>
          <div className="down-arrow">1</div>

          <div className="dropdown-content">
            <Calendar />
          </div>
        </div>
        <div>
          <button id="reserve-btn" type="submit" onClick={this.props.onClick}>
            RESERVE
          </button>
        </div>
      </div>
    );
  }
}

export default Reserve;
