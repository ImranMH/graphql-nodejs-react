import React, { Component } from 'react'
import PropTypes from 'proptype'
export default class DeleteBtn extends Component {
  static propetype = {
    action: PropTypes.Func,
    dialog: PropTypes.String
  }
 
  state = {
    clicked:0
  }
  handleClick = ()=>{
    const {clicked} = this.state
    const { action } = this.props
    this.setState({
      clicked: clicked +1
    },()=>{
      console.log(clicked);
      if(clicked === 2){
        console.log(clicked);
        action()
        this.setState({
          clicked:0
        })
      }
    })
  }
  render() {
    const {dialog} = this.props
    const { clicked } = this.state
    return (
      <div>
        <button onClick={this.handleClick} className="btn">
          {dialog[clicked]}
        </button>
      </div>
    )
  }
}
