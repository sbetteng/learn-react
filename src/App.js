import logo from './logo.svg';
import './App.scss';
import { Component } from 'react';
import List from './List';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// Component
// function Greeting() { `
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

function Home() { 
  return <h1>Ini Halaman Home</h1>
}

function ListUsers() { 
  return (
    <div>
      <h1>Ini Halaman Users</h1>
      <ul>
        <Link to='users/Betteng'> Betteng</Link> <br />
        <Link to='users/Syaiful'> Syaiful</Link>
      </ul>
    </div>

  ) 
}
function DetailUsers({ match }) { 
  return <h1>ini Halaman { match.params.name }</h1>
}

function NotFound() { 
  return <h1>404, Halaman Tidak ditemukan</h1>
}
  
class App extends Component {
  constructor(props) { 
    super(props)
    this.state = { 
      todoItems: '',
      items: [],
      isLoading: true
    }
  }

  handleSubmit = (event) => { 
    event.preventDefault();
    // console.log('muncul')
    this.setState({
      // items: this.state.items.concat([this.state.todoItems]),
      items     : [...this.state.items, this.state.todoItems],
      todoItems : ''
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItems: event.target.value
    })
    // console.log(this.state.todoItems)
  }

  // API
  componentDidMount() { 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({items: data, isLoading: false}))
  }
  

  render() { 
    // const { items, isLoading } = this.state
    
    // if (isLoading) { 
    //   return <p>Loading.....</p>
    // }
    return (
        <BrowserRouter>
        <div className="App">
            {/* <form onSubmit={this.handleSubmit}>
              <input value={this.state.todoItems} onChange={this.handleChange} />
              <button>Add</button>
            </form>
            <div>
              <List items={this.state.items} />
            </div> */}
          <nav>
            <li> <Link to='/'> Home </Link></li>
            <li> <Link to='/users'> Users </Link></li>
          </nav>
          
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/users' exact component={ListUsers} />
              <Route path='/users/:name' exact component={DetailUsers} />
              <Route component={NotFound} />
            </Switch>
            {/* <div>
            <ul>
              { items.map ((item, index) =>
              
                <li key={index}> { item.name }</li>)
              }
            </ul>
            </div> */}

            {/* <header className="App-header">
            <Tooggle />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p> */}

            
            
            {/* <Clicker /> */}
            {/* <Timer start="0" />
            <Timer start="5" />
            <Greeting name="Syaiful" age="21" />
            <Greeting name="Betteng" age="25"/> */}
            {/* <div className="Button">Button Here</div> */}
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
          {/* </header> */}
          </main>
        </div>
        </BrowserRouter>
      );
    }
  }

export default App;
