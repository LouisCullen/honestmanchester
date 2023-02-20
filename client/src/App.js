import React, { Component } from 'react';
// import { Confessions } from './Confessions';
import * as ReactDOM from 'react-dom/client';
import  ConfessionForm from './ConfessionForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const API_URL = "honestmanchester.com";

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  confessHandler(event){
    const root = ReactDOM.createRoot(
      document.getElementById('site-content')
    );
    root.render(<ConfessionForm />);
  }

  render() {
    return (
      <div className='site'>
        <nav className="sticky-top navbar navbar-style">
          <div id='brand-div'>
            <h1 class="display-5">Honest Manchester</h1>
            <p>Anonymous confessions</p>
          </div>
          <button className='navbar-confession btn btn-confess' onClick={this.confessHandler}>Confess</button>
        </nav>
        <div className="container" id="site-content">
          <ConfessionForm /> 
        </div>
      </div>
    );
  }
}

export default App;
