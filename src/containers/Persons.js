import React, { Component } from 'react'
import AddPerson from '../components/AddPerson/AddPerson'
import Person from '../components/Person/Person'
import { connect } from 'react-redux'


class Persons extends Component {

  render () {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson}/>
        {this.props.persons.map(person => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              deletePerson={() => this.props.onDeletePerson(person.id)}
            />
          )
        )}
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    persons: state.persons
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: (name, age) => dispatch({type: 'ADD_PERSON', personData: { name: name, age: age}}),
    onDeletePerson: (id) => dispatch({type: 'DELETE_PERSON', id: id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Persons)