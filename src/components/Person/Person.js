import React, { Component } from 'react'


class Person extends Component {

  render () {
    return (
      <div onClick={this.props.deletePerson}
           style={{width: '40%', margin: 'auto', border: '2px solid black', marginTop: 20}}
      >
        <h1>Name: {this.props.name}</h1>
        <h1>age: {this.props.age}</h1>
      </div>
    )
  }

}

export default Person