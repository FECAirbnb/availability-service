/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Reserve = props => {
  return (
    <div className="reserve">
      <div>
        <span className="price">${props.loc.price}</span>
        <span className="per-night"> per night</span>
      </div>
      <div>
        <span role="img" aria-label="Rating 1 out of 5" className="_m5wjo84">
          4.99
        </span>
        <span className="per-night">(6 reviews)</span>
      </div>
      <div>
        <form>
          <label>Check-in</label>
          <input id="check-in" type="date" />
          <label>Check-out</label>
          <input id="check-out" type="date" />
        </form>
      </div>
      <div className="dropdown">
        <button className="dropbtn">1 Guest</button>
        <div className="down-arrow">1</div>

        <div className="dropdown-content">
          <div className="adults">adults</div>
          <div className="children">children</div>
        </div>
      </div>
      <div>
        <button id="reserve-btn" type="submit" onClick={props.onClick}>
          RESERVE
        </button>
      </div>
    </div>
  );
};

export default Reserve;
