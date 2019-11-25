import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushi: [],
      i: 0,
      currentSushi: [],
      eatenSushi: [],
      cash: 100
    }
  }

  componentDidMount(){
      fetch(API)
      .then(res => res.json())
      .then(sushi =>{
        let currentSushi = sushi.slice(0, 4)
        this.setState({
          sushi: sushi,
          currentSushi: currentSushi
        }
        )
      })
}  
 
 
  moreSushi = () => {
    console.log('more sushi coming!')
    console.log(this.state.i)
    let newI = this.state.i + 4
    let newSushi = this.state.sushi.slice(newI, newI + 4)
    this.setState({
      i: newI,
      currentSushi: newSushi
    })
  }

  paySushi = (sushiObj) => {
    let copy = [...this.state.eatenSushi]
    copy.push(sushiObj)
    let price = sushiObj.price
    let cash = this.state.cash
    let newCash = cash - price 
    newCash < 0 ? alert('You Broke!') : 
    this.setState({
      eatenSushi: copy,
      cash: cash - price
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer paySushi={this.paySushi} eatenSushi={this.state.eatenSushi} moreSushi={this.moreSushi} cash={this.state.cash} sushi={this.state.currentSushi}/>
        <Table cash={this.state.cash} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;