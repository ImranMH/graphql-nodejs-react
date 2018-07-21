import React, { Component } from 'react'

export default class ToggleRender extends Component {
  state = {
    on: false
  }
  toggleState = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    const {render} = this.props
    return (
      <div>
        {render({
          on:this.state.on,
          toggleState: this.toggleState
        })}
        {this.props.children}
      </div>
    )
  }
}
