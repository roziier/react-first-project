import axios from "axios";
import React, { useState, useEffect } from "react";

const CountryList = ({ name, flag, region, population, capital, borders }) => {
  console.log(borders);
  const [border, setBorders] = useState([]);

  const getData = async () => {
    const myarray = [];

    for (let index = 0; index < borders.length; index++) {
      const element = await axios(
        `https://restcountries.eu/rest/v2/alpha/${borders[index]}`
      );
      myarray.push(element.data);
    }
    setBorders(myarray);
  };

  useEffect(() => {
    getData();
  }, [borders]);

  return (
    <div className="total">
      <div className="container-flag">
        <img src={flag} alt={name}></img>
        <h3>{name}</h3>
        <h4>{capital}</h4>
        <h5>{region}</h5>
        <h5>🧑‍🤝‍🧑 {(population / 1000000).toFixed(2)} M</h5>
      </div>

      <h4 style={{ textAlign: "center" }}>Borders</h4>

      <div className="border-cards">
        {border.map((el, index) => (
          <div className="single" key={index}>
            <img src={el.flag} alt={el.name}></img>
            <h3>{el.name}</h3>
            <h4>{el.capital}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
