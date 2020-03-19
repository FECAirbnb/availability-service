/* eslint-disable react/jsx-closing-tag-location */
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
// import AddGuests from './AddGuests.jsx';

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      open: false,
      clickGuest: false,
      checkIn: 'Check in',
      checkOut: 'Check out',
      guestCount: 1
    };

    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleStatechange = this.handleStatechange.bind(this);
    this.handleGuestCount = this.handleGuestCount.bind(this);
    this.handleGuestDropdown = this.handleGuestDropdown.bind(this);
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

  handleGuestDropdown() {
    if (!this.state.clickGuest) {
      this.setState(state => {
        return {
          clickGuest: true
        };
      });
    } else {
      this.setState(state => {
        return {
          clickGuest: false
        };
      });
    }
  }

  handleOutsideClick(e) {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false,
        clickGuest: false
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

  handleStatechange() {
    this.setState({
      open: false,
      checkIn: 'Check in',
      checkOut: 'Check out'
    });
    this.props.onClick();
  }

  handleGuestCount() {
    let guestStr = '';
    if (this.state.guestCount === 1) {
      guestStr = 'guest';
    } else {
      guestStr = 'guests';
    }
    return guestStr;
  }

  handleArrowChange() {
    let arrow = '';
    if (this.state.clickGuest === false) {
      arrow = (
        <img
          src="https://image.flaticon.com/icons/png/128/566/566015.png"
          data-src="https://image.flaticon.com/icons/png/128/566/566015.png"
          srcSet="https://image.flaticon.com/icons/svg/566/566015.svg 4x"
          alt="Down chevron free icon"
          title="Down chevron free icon"
          width="64"
          height="64"
          className="arrow"
        ></img>
      );
    } else {
      arrow = (
        <img
          src="https://image.flaticon.com/icons/png/128/566/566014.png"
          data-src="https://image.flaticon.com/icons/png/128/566/566014.png"
          srcSet="https://image.flaticon.com/icons/svg/566/566014.svg 4x"
          alt="Up chevron free icon"
          title="Up chevron free icon"
          width="64"
          height="64"
          className="arrow"
        ></img>
      );
    }
    return arrow;
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
        </div>
        <div>
          {this.state.open && (
            <div className="dropdown">
              <Calendar state={this.props.state} handleDateChange={this.handleDateChange} />
            </div>
          )}
        </div>
        <div className="add-guest">
          <div id="guest-count" onClick={this.handleGuestDropdown}>
            {this.state.guestCount} {this.handleGuestCount()}
          </div>

          <div id="arrow" onClick={this.handleGuestDropdown}>
            {this.handleArrowChange()}
          </div>
        </div>
        <div>
          {this.state.clickGuest && (
            <div className="dropdown">
              <div>
                <div>hello</div>
              </div>
            </div>
          )}
        </div>
        <div>
          <button id="reserve-btn" type="submit" onClick={this.handleStatechange}>
            RESERVE
          </button>
        </div>
      </div>
    );
  }
}

export default Reserve;
