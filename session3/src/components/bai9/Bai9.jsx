import React, { Component } from 'react'

export default class Bai9 extends Component {
  constructor() {
    super()
    this.state = {
      text: "nguyen thi hieu"
    }
  }
  changeText = () => {
    this.setState({
      text: "nguyen thi duong"
    })
  }
  render() {
    return (
      <>
        <p>{this.state.text}</p>
        <button onClick={this.changeText}>click</button>
      </>
    )
  }
}
