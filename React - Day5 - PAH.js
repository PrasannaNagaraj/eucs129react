import React, { Component } from 'react'

export default class Day5PAH extends Component {
   state={color:"Yellow"}
componentDidMount()
{
    setTimeout(()=>{this.setState({color:"Blue"})},3000)
}
    render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
      </div>
    )
  }
}