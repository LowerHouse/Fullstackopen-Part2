const Country = (prop) => {
    const setCountry = () =>{
      prop.setCountry([prop.country])
    }
        return (
        <li>
          {prop.country.name.official}
          <button onClick={setCountry}>show</button>
        </li>
        )
    
}

  export default Country