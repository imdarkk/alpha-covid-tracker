import "./css/App.css";
import React, {useState, useEffect} from "react";
import DataBox from "./components/DataBox.component";
import SearchCard from "./components/SearchCard.component";
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const covidData = async () => {
      const coronaD = await axios.get(
        "https://api.apify.com/v2/key-value-stores/BhQ9FtsXUsLV30EvN/records/LATEST?disableRedirect=true"
      );
      setData(
        coronaD.data.map((g) => ({
          country: g.country,
          deceased: g.deceased,
          infected: g.infected,
          recovered: g.recovered,
          tested: g.tested,
        }))
      );
    };
    covidData();
  }, []);

  return (
    <div className="App">
      <SearchCard />
      <div className="wrapperCountries">
        {data.map((i) => (
          <DataBox
            country={i.country}
            deceased={i.deceased}
            infected={i.infected}
            recovered={i.recovered}
            tested={i.tested}
            key={i.country}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
