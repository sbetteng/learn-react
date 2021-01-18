import logo from './logo.svg';
import './App.scss';
import { Component } from 'react';

// Component
// function Greeting() { 
//   return <h1>Hallo Betteng</h1>
// }

// Properties
function Biodata(props) { 
  return <span>umur {props.age}</span>
}
function Greeting(props) { 
  return <h1>Hallo {props.name} - <Biodata age={props.age}/> </h1>
}

// State
class Timer extends Component { 
  constructor(props) { 
    super(props)
      this.state = {
        time: props.start
      
    }
  }

  // Lifecycle
  componentDidMount() { 
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() { 
    clearInterval(this.addInterval)
  }

  increase() { 
    // update setiap detiknya
    this.setState((state, props) => ({
        time: parseInt(state.time) + 1
    }))
  }

  render() { 
    return (
      <div> {this.state.time} Detik</div>
    )
  }
}

// function Clicker() { 
//   function handleClick(e) { 
//     alert("Berhasil diclick!")
//     e.preventDefault();    
//   }

//   return (
//     <a href="#" onClick={handleClick}> Click Here</a>
//   )
// }

class Tooggle extends Component { 
  constructor(props) { 
    super(props)
    this.state = {
      toggleStatus: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() { 
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render(){ 
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p>Kondisi sekarang {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
      </button>
      )
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tooggle />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* <Clicker /> */}
        <Timer start="0" />
         <Timer start="5" />
        <Greeting name="Syaiful" age="21" />
        <Greeting name="Betteng" age="25"/>
        {/* <div className="Button">Button Here</div> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
