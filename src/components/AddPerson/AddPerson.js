import React, { Component } from 'react'


class AddPerson extends Component {

  render () {
    return (
      <div>
        <input type="name" placeholder='Enter your name'/>
        <input type="age" placeholder='Enter your age'/>
        <button>Add</button>
      </div>
    )
  }

}

export default AddPerson