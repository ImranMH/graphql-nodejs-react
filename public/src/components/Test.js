import React, { Component } from 'react'

const styled = {
  dark:{
    background: '#00f',
    color: '#ff0'
  },
  light:{
    background:"#f0f",
    color: "#0ff"
  }
}
const ThemeContext = React.createContext(styled.dark);
const Tool = (props) => {
  return (
    <div>
      <ToolButton />
    </div>
  )
}


const ToolButton = (props) => {
  return (
    <div>
      <ThemeContext.Consumer>
       {
          theme => <Button {...props} theme={theme} /> 
       }
      </ThemeContext.Consumer>
    </div>
  )
}



const Button = (props) => {
  return (
    <div>
      <button style={{ background: props.theme.background, color: props.theme.color}} className="btn">
            fancy Button  
      </button>
    </div>
  )
}








export default class Test extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={styled.light}>
          <Tool />
        </ThemeContext.Provider>
      </div>
    )
  }
}
