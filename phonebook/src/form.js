import {useState} from 'react'
import pencil from './services/book-handle.js'

const Form = (props) => {

    const [newName, setNewName] = useState("");
  
    const [newNumber, setNewNumber] = useState("");
  
    const handleNameChange = (event) => setNewName(event.target.value);
  
    const handleNumberChange = (event) => setNewNumber(event.target.value);


    const addPerson = (event) => {
      event.preventDefault();
      const id = props.persons.slice(-1).id + 1
      
      const personObj = {
        
        name: newName,
        number: newNumber,
        id: id
      };
      if (props.persons.find((person) => person.name === newName)) {

        if( window.confirm('haluatko päivitä "' + newName + '" numero?')){

          const id = props.persons.filter(e => e.name === newName)[0].id

          pencil.update(id, personObj).then(ret => {
            pencil.getAll()
            .then(resp => {
              props.setPersons(resp)
            })
          }
          )
          props.getMessage({
            message:`Phone number of '${newName}' was updated`,
            status: true 
        })
          setTimeout(() => {
            props.getMessage(null)
          }, 5000)
        } else{
          return null
        }
      } else {
        pencil
            .create(personObj)
            .then(returnedPerson => {
                props.setPersons(props.persons.concat(returnedPerson));
          })

          props.getMessage({
            message:`Phone number of '${newName}' was added`,
            status: true 
        })
          setTimeout(() => {
            props.getMessage(null)
          }, 5000)
        }

      setNewName("");
      setNewNumber("");
    };
  


    return (
      <form onSubmit={addPerson}>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
          <br />
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
};

  export default Form