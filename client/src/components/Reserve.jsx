/* eslint-disable no-unused-expressions */
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
    this.addGuests = this.addGuests.bind(this);
    this.subGuests = this.subGuests.bind(this);
    this.numberOfDays = this.numberOfDays.bind(this);
    this.totalCost = this.totalCost.bind(this);
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

  addGuests() {
    const prevState = this.state.guestCount;
    if (this.state.guestCount < 5) {
      this.setState({
        guestCount: prevState + 1
      });
    }
  }

  subGuests() {
    const prevState = this.state.guestCount;
    if (this.state.guestCount > 0) {
      this.setState({
        guestCount: prevState - 1
      });
    }
  }

  numberOfDays() {
    if (this.state.checkIn !== 'Check in' && this.state.checkOut !== 'Check out') {
      const date1 = new Date(this.state.checkIn);
      const date2 = new Date(this.state.checkOut);
      const DifferenceInTime = date2.getTime() - date1.getTime();
      const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);
      return DifferenceInDays;
    }
    return '';
  }

  costOfNights() {
    const nights = this.numberOfDays();
    return this.props.state.data[0].price * nights;
  }

  totalCost() {
    const nights = this.numberOfDays();
    return (
      this.props.state.data[0].price * nights +
      this.props.state.data[0].service_fee +
      this.props.state.data[0].cleaning_fee
    );
  }

  handleCostMenu() {
    let costInfo = <div></div>;
    if (this.state.checkOut !== 'Check out') {
      costInfo = (
        <div className="cost-info">
          <div className="pricing-details">
            <div className="price-nights">
              ${this.props.state.data[0].price} x {this.numberOfDays()}
            </div>
            <div></div>
            <div className="cost-of-stay">{this.costOfNights()}</div>
          </div>
          <div className="pricing-details">
            <div className="price-nights">${this.props.state.data[0].service_fee} Service fee</div>
          </div>
          <div className="pricing-details">
            <div className="price-nights">
              ${this.props.state.data[0].cleaning_fee} Cleaning fee
            </div>
          </div>
          <div className="total-cost">
            <div className="price-nights">Total cost:</div>
            <div></div>
            <div className="total-for-stay">{this.totalCost()}</div>
          </div>
        </div>
      );
    }
    return costInfo;
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
      clickGuest: false,
      checkIn: 'Check in',
      checkOut: 'Check out',
      guestCount: 1
    });

    this.props.onClick;
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
          <img
            alt="Star icon"
            src="https://img.icons8.com/material-sharp/2x/star.png"
            className="star"
            // style="height:24px;width:24px;"
          ></img>
          <span className="rating">4.99</span>
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
            <div className="guest-dropdown">
              <div className="grid-item">
                {this.state.guestCount} {this.handleGuestCount()}
              </div>
              <div className="grid-item"></div>
              <div className="grid-item">
                <button className="sub-guests" onClick={this.subGuests}>
                  -
                </button>
                <span className="seperator">-</span>
                <button className="add-guests" onClick={this.addGuests}>
                  +
                </button>
              </div>
            </div>
          )}
        </div>
        {this.handleCostMenu()}
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
