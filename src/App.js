import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <form>
        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
        <br/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }

}

export default App;
