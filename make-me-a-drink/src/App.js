import {  Component } from 'inferno';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Logo width="80" height="80" /> */}
          <p>Welcome to my freaking app</p>
          <p>
            Sup you duders?!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
