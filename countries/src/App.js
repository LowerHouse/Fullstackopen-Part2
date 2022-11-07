import { useState} from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import ShowCountry from "./components/ShowCountry";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const isCountryFound = () => {
    if(countries.length === 1){
      return <ShowCountry country = {countries[0]}/>
    }
    else if(countries.length ===0){
      return <p>Too many matches</p>
    }
    else{
      return countries.map((country) => {
        return (
          <CountryList
            key={country.name.common}
            country={country}
            setCountry={setCountries}/>
            );
          }
        )
    }
  }

  const countriesSearch = (value) => {
    axios
      .get("https://restcountries.com/v3.1/name/".concat(value))
      .then((response) => {
        if (Object.keys(response.data).length <= 10) {
          setCountries(response.data);
        } else if(Object.keys(response.data).length > 10){
          setCountries([])
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    if (event.target.value) {
      countriesSearch(event.target.value);
    } 
  };

  return (
    <>
      <input value={search} onChange={handleSearchChange} />
      <br />
      {isCountryFound()}

    </>
  );
}

export default App;
