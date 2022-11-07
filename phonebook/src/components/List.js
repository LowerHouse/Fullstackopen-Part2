const Person = (props) => 
   <li>
    {props.person.name}: {props.person.number} 
    <button onClick={(e) => {
      if (window.confirm('Haluatko poista - ' + props.person.name)) {
      props.rem(props.id)
      setTimeout(() => {
        props.getMessage(null)
      }, 5000)
    }
    }}
      
      type='button'>delete</button>
  </li>


const ListOfPersons = (props) => 
  <><h2>{props.theme}</h2>

  {props.persons.map((person) => (
    <Person key={person.id} 
    id={person.id} 
    person={person} 
    persons={props.persons} 
    rem={props.rem}
    getMessage={props.getMessage}/>
  ))}
</>

export default ListOfPersons