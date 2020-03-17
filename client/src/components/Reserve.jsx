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
    this.state = {
      open: false
    };
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
  }

  handleDropdownClick() {
    this.setState(state => {
      return {
        open: true
      };
    });
  }

  render() {
    return (
      <div className="reserve">
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
          <div className="check-in" onClick={this.handleDropdownClick}>
            Check in
          </div>

          <div className="check-out">Check out</div>
          <div className="dropdown-content"></div>
        </div>
        <div>
          {this.state.open && (
            <div className="dropdown">
              <Calendar />
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
