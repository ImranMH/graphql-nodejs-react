import React, { Component } from 'react'
import DeleteBtn from './reusuable/DeleteBtn'
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
const dialog = ['delete', 'are You sure?', 'Ok one last time??']
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
  action = ()=>{
    console.log('action is executed rom here');
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={styled.light}>
          <Tool />
        </ThemeContext.Provider>
        <DeleteBtn action={this.action} dialog={dialog} />
      </div>
    )
  }
}
