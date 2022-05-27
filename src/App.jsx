import { render } from "react-dom";

const { Component } = require("react");

class App extends Component{

  constructor(props){
  this.state = {
    clock: 1000,
    copo: 'água'
  }
}

  componentDidMount(){
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render(){
    const {clock, copo} = this.state
    return(
      <div>
        <h1>{this.state.clock}</h1>
        <button onClick={() => this.alterarCopo()}>{copo}</button>
      </div>
    )
}
}

export default render