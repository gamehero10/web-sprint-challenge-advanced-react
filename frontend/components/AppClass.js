import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:9000/api/result';



export default class AppClass extends React.Component {
 
  // initial state for App Class
  state = {
    x: 2,
    y: 2,
    steps: 0,
    grid: ['', '', '', '', 'B', '', '', '', ''],
    message: '',
    className: 'square',
    email: ''
  }


  // function for changing state when left button is clicked
  handleLeft = () => {
    if(this.state.grid[1] === 'B') {
      this.setState({
        ...this.state,
        grid: ['B', '', '', '', '', '', '', '', ''],
        message: '',
        x: 1,
        y: 1,
        steps: this.state.steps + 1
      })
    }   else if(this.state.grid[2] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', 'B', '', '', '', '', '', '', ''],
        message: '',
        x: 2,
        y: 1,
        steps: this.state.steps + 1
      })
    }  else if(this.state.grid[4] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', 'B', '', '', '', '', ''],
        message: '',
        x: 1,
        y: 2,
        steps: this.state.steps + 1
      })
    }  else if(this.state.grid[5] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', 'B', '', '', '', ''],
        message: '',
        x: 2,
        y: 2,
        steps: this.state.steps + 1
      })
    }  else if (this.state.grid[7] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', '', 'B', '', ''],
        message: '',
        x: 1,
        y: 3,
        steps: this.state.steps + 1
      })
    }  else if (this.state.grid[8] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', '', '', 'B', ''],
        message: '',
        x: 2,
        y: 3,
        steps: this.state.steps + 1
      })
    }   else if (
      this.state.grid[0] === 'B' ||
      this.state.grid[3] === 'B' ||
      this.state.grid[6] === 'B'
    ) {
      this.setState({
        ...this.state,
        message: "You can't go left"
      })
    }
  }

  // function for changing state when right button is clicked
  handleRight = () => {
    if(this.state.grid[0] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', 'B', '', '', '', '', '', '', ''],
        message: '',
        x: 2,
        y: 1,
        steps: this.state.steps + 1
      })
    }  else if(this.state.grid[1] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', 'B', '', '', '', '', '', ''],
        message: '',
        x: 3,
        y: 1,
        steps: this.state.steps + 1
      }) 
    }   else if(this.state.grid[3] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', 'B', '', '', '', ''],
        message: '',
        x: 2,
        y: 2,
        steps: this.state.steps + 1
      })
    }   else if (this.state.grid[4] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', 'B', '', '', ''],
        message: '',
        x: 3,
        y: 2,
        steps: this.state.steps + 1
      })
    }  else if(this.state.grid[6] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', '', '', 'B', ''],
        message: '',
        x: 2,
        y: 3,
        steps: this.state.steps + 1
      })
    }  else if(this.state.grid[7] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', '', '', '', ''],
        message: '',
        x: 3,
        y: 3,
        steps: this.state.steps + 1
      })
    } else if(
      this.state.grid[2] === 'B' ||
      this.state.grid[5] === 'B' ||
      this.state.grid[8] === 'B'
    ) {
      this.setState({
        ...this.state,
        message: "You can't go right"
      })
    }
  }


  // function for changing state with up button is clicked
  handleUp = () => {
    if(this.state.grid[3] === 'B') {
      this.setState({
        ...this.state,
        grid: ['B', '', '', '', '', '', '', '', '',],
        message: '',
        x: 1,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[4] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', 'B', '', '', '', '', '', '', '',],
        message: '',
        x: 2,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[5] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', 'B', '', '', '', '', '', '',],
        message: '',
        x: 3,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[6] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        x: 1,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[7] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        x: 2,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[8] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        x: 3,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (
      this.state.grid[0] === 'B' ||
      this.state.grid[1] === 'B' ||
      this.state.grid[2] === 'B'
      ) {
      this.setState({
        ...this.state,
        message: "You can't go up"
      })
    }
  }

// function for changing state with down button is clicked
  handleDown = () => {
    if(this.state.grid[0] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        x: 1,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[1] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        x: 2,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[2] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        x: 3,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[3] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', '', 'B', '', '',],
        message: '',
        x: 1,
        y: 3,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[4] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        x: 2,
        y: 3,
        steps: this.state.steps + 1
      })
    } else if (this.state.grid[5] === 'B') {
      this.setState({
        ...this.state,
        grid: ['', '', '', '', '', '', '', '', 'B',],
        message: '',
        x: 3,
        y: 3,
        steps: this.state.steps + 1
      })
    } else if (
      this.state.grid[6] === 'B' ||
      this.state.grid[7] === 'B' ||
      this.state.grid[8] === 'B'
      ) {
      this.setState({
        ...this.state,
        message: "You can't go down"
      })
    }
  }

  // function for changing state when reset button is clicked
  handleReset = () => {
    this.setState({
      ...this.state,
      grid: ['', '', '', '', 'B', '', '', '', ''],
      message: '',
      x: 2,
      y: 2,
      steps: 0,
      email: ''
    })
  }


  // assigns value of email input to email state key (logs are required to check payload)
  handleChanges = e => {
    this.setState({
      ...this.state,
      email: e.target.value
    })
  }

  // prevents default while submitting payload to API endpoint
  handleSubmit = e => {
    e.preventDefault();
    axios.post(URL, {
      x: this.state.x,
      y: this.state.y,
      steps: this.state.steps,
      email: this.state.email
    })
    
    .then(res => {
      this.setState({
        ...this.state,
        message: res.data.message,
        email: ''
      })
    })

    .catch(err => {
      this.setState({
        ...this.state,
        message: err.response.data.message
      })
    })
  }

  // changes the word 'times' to 'time' on move counter when counter is equal to 1 move
  moveMessage = () => {
    if(this.state.steps === 1) {
      return(
        `You moved ${this.state.steps} time`
      )
    } else {
      return `You moved ${this.state.steps} times`
    }
  }
 

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates (${this.state.x}, ${this.state.y})`}</h3>
          <h3 id="steps">{this.moveMessage(this.state.steps)}</h3>
        </div>
        <div id="grid">
          {this.state.grid.map((active, idx) => { //map over state that creates the grid
            return (
              <div 
                key={idx}
                className={`${active ? 'active square' : 'square'}`}> 
                  {active}
                  {/* {console.log('active', active)} */}
            </div>)
          })}
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          {this.state.grid.map((val, idx) => {
            return (<button id="left" key={idx} onClick={() => this.handleLeft(val)}>LEFT</button>)
          })}
          {/*Above is LEFT button */}

          {this.state.grid.map((val, idx) => {
            return (<button id="up" key={idx} onClick={() => this.handleUp(val)}>UP</button>)
          })}
          {/*Above is UP button */}

          {this.state.grid.map((val, idx) => {
            return (<button id="right" key={idx} onClick={() => this.handleRight(val)}>RIGHT</button>)
          })}
          {/*Above is RIGHT button */}

          {this.state.grid.map((val, idx) => {
            return (<button id="down" key={idx} onClick={() => this.handleDown(val)}>DOWN</button>)
          })}
          {/*Above is DOWN button */}

          {this.state.grid.map((val, idx) => {
            return (<button id="reset" key={idx} onClick={() => this.handleReset(val)}>reset</button>)
          })}
          {/*Above is RESET button */}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input 
            id="email" 
            value={this.state.email}
            type="email" 
            placeholder="type email"
            onChange={this.handleChanges}>
            </input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}