import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKoshar: false,
        isLactoseFree: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target

    type === "checkbox"?
      this.setState(prevState => {
        return{
          dietaryRestrictions:{
            ...prevState.dietaryRestrictions,
            [name]: checked
          }
        }
      })
      :
      this.setState({
        [name]: value
      })
  }

  render(){
    return(
      <form>
        <input 
          type="text" 
          value={this.state.firstName}
          name="firstName" 
          placeholder="First Name" 
          onChange={this.handleChange}
        />
        <br/>
        <input 
          type="text" 
          value={this.state.lastName}
          name="lastName" 
          placeholder="Last Name" 
          onChange={this.handleChange}
        />
        <br/>
        <input 
          type="text" 
          value={this.state.age}
          name="age" 
          placeholder="Age" 
          onChange={this.handleChange}
        />
        <br/>
        <label>
          <input 
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />Male
        </label>
        <label>
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />Female
        </label>
        <br/>
        <select 
          value={this.state.destination}
          name="destination"
          onChange={this.handleChange}
        >
          <option value="">--Please Choose a destination--</option>
          <option value="germany">Germany</option>
          <option value="peru">Peru</option>
          <option value="bolibia">Bolibia</option>
          <option value="venezuela">Venezuela</option>
        </select>
        <br/>
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={this.handleChange}
            checked={this.state.dietaryRestrictions.isVegan}
          />Vegan
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.dietaryRestrictions.isKosher}
          />Kosher
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={this.handleChange}
            checked={this.state.dietaryRestrictions.isLactoseFree}
          />Lactose Free
        </label>
        <br/>

        <h1>{this.state.firstName}<br/> {this.state.lastName}<br/> {this.state.age}<br/> {this.state.gender}<br/> {this.state.destination} <br/> {this.state.dietaryRestrictions.isVegan}</h1>
      </form>
    )
  }

}

export default App;
