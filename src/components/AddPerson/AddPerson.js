import React, { Component } from 'react'


class AddPerson extends Component {

  state = {
    name: '',
    age: ''
  }

  onNameChangeHandler = (e) => {
    this.setState({name: e.target.value})
  }
  onAgeChangeHandler = (e) => {
    this.setState({age: e.target.value})
  }

  render () {
    return (
      <div>
        <input
          type="name"
          placeholder='Enter your name'
          onChange={this.onNameChangeHandler}
          value={this.state.name}
        />
        <input
          type="number"
          placeholder='Enter your age'
          onChange={this.onAgeChangeHandler}
          value={this.state.age}
        />
        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
      </div>
    )
  }

}

export default AddPerson