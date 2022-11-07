import { useState, useEffect } from 'react'
import Form from './form';
import pencil from './services/book-handle.js'
import Notification from './components/Notifications.js';
import ListOfPersons from './components/List';

const App = () => {


  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  const [filList, setFilList] = useState(persons);

  const [message, setMessage] = useState('');

  const getMessage = (message) => {
   setMessage(message)
  }

  useEffect(() => {
    pencil.getAll()
      .then(resp => {
        setPersons(resp)
      })
  }, [])

  const removePhone = (id) =>{
    pencil.remove(id).then(()=>{
    setPersons(
      persons.filter(e => {
        return e.id !== id})
    )
    setMessage({
      message:`Phone number was deleted`,
      status: true })
    
}).catch(error => {
  setMessage({
    message:`Phone number was already deleted`,
    status: false })
  setPersons(
      persons.filter(e => {
        return e.id !== id})
    )
})
    
  }

  const handleFilterChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);

    const filtered = persons.filter(person => 
      person.name.startsWith(event.target.value)) 
    
    setFilList(filtered);
  };

  return (
    <div>
      <h1>PhoneBook</h1>
      <Notification message={message}/>
      filter shown with <input value={filter} onChange={handleFilterChange} />
      <ListOfPersons 
      theme = {'Searched'} 
      persons = {filList}
      />
      <h2>Add new</h2>
      <Form persons={persons} 
      setPersons={setPersons} 
      getMessage={getMessage}/>
      <ListOfPersons 
      rem = {removePhone}
      theme = {'Phone Book'} 
      persons = {persons}
      getMessage={getMessage}
      />
    </div>
  );
};

export default App;
