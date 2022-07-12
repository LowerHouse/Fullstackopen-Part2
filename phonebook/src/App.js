import { useState } from "react";

const Form = (props) => {
  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => setNewName(event.target.value);

  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
      id: props.persons.length + 1,
    };
    if (props.persons.find((person) => person.name === personObj.name)) {
      return window.alert('name "' + newName + '" already exist');
    } else {
      props.setPersons(props.persons.concat(personObj));
      setNewName("");
      setNewNumber("");
    }
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

const Person = (props) => (
  <li>
    {props.person.name}: {props.person.number}
  </li>
);

const ListOfPersons = (props) => 
  <><h2>{props.theme}</h2>
  {props.persons.map((person) => (
    <Person key={person.id} person={person} />
  ))}
</>

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filter, setFilter] = useState("");

  const [filList, setFilList] = useState(persons);

  const handleFilterChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);

    const filtered = persons.filter(person => 
      person.name.startsWith(event.target.value)) 
    
    setFilList(filtered);
  };

  return (
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange} />
      <ListOfPersons 
      theme = {'Searched'} 
      persons = {filList}
      />
      <h2>Add new</h2>
      <Form persons={persons} setPersons={setPersons} />
      <ListOfPersons 
      theme = {'Phone Book'} 
      persons = {persons}
      />
    </div>
  );
};

export default App;
