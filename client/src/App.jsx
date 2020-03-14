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

  renderView() {
    if (this.state.data === null) {
      return <div> No locations </div>;
    }
    return <Reserve loc={this.state.data} />;
  }

  render() {
    return <div className="main">{this.renderView()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('reserve'));
