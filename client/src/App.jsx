import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      data: ''
    };
  }

  componentDidMount() {
    axios.get('/hi').then(result => {});
    // $.ajax({
    //   type: 'GET',
    //   url: '/hi',
    //   ContentType: 'application/json',
    //   success: result => {
    //     console.log(result);
    //   }
    // });
  }

  render() {
    return <div>hello world!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
