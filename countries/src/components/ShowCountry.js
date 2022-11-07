import Weather from "./Weather.js";

const ShowCountry = (prop) => {
    
  const languages = Object.values(prop.country.languages);

    
    return (
      <>
        <h1>{prop.country.name.official}</h1>
        <div>
          capital {prop.country.capital}
          <br />
          area {prop.country.area}
        </div>
        <div>
          <h3>Languages:</h3>
          <ul>
            {languages.map((lang) => {
              return <li key={lang}>{lang}</li>;
            })}
          </ul>
        </div>
        <img alt="flag" src={prop.country.flags.png} />
        
        <h2>Weather in {prop.country.capital}</h2>
        <Weather country = {prop.country}/>

      </>
    );
  
};

export default ShowCountry;
