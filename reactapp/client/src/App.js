
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: null
  };

    componentDidMount() {
      this.callBackendAPI()
      .then(res => this.setState({data: res.express}))
      .catch(err => console.log(err));
      
    }
    callBackendAPI = async () => {
      
      const response = await fetch("http://localhost:4444/express_backend");
      const body = await response.json();
      
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
};

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">{this.state.data}</p>
    </div>
  );
}
}


export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component{
  
//   constructor(props) {
//   super(props);
//   this.state = { apiResponse: "" };
// }

// callAPI() {
//   fetch("http://localhost:4444/express_backend")
//       .then(res => res.text())
//       .then(res => this.setState({ apiResponse: res }))
//       .catch(err => err);
// }

// componentWillMount() {
//   this.callAPI();
// }

// render() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo'/>
//         <h1 className='App-title'> Welcome to React</h1>
//       </header>
//     </div>
//   );
// }

// }

// export default App;