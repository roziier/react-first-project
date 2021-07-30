import axios from "axios";
import React, { useState, useEffect } from "react";
// import CountryList from "./components/CountryList";
import data from "../fakedata";
import CountryList from "./CountryList";

const CountryBar = () => {
  const [imgflags, setImgflags] = useState(data);
  const [filtred, setFiltred] = useState(imgflags);
  const [show, setShow] = useState(false);

  const categorie = Array.from(new Set(imgflags.map((el) => el.name)));

  function filtroFlags(nome) {
    setFiltred(imgflags.filter((el) => (el.name === nome ? el : "")));
    setShow(true);
  }

  return (
    <div>
      <nav className="country-bar">
        {categorie.map((nome, index) => {
          return (
            <button key={index} onClick={() => filtroFlags(nome)}>
              {nome}
            </button>
          );
        })}
      </nav>
      {show && <h1 style={{ textAlign: "center" }}>Selected Coutry</h1>}
      {show && filtred.map((el, index) => <CountryList key={index} {...el} />)}
    </div>
  );
};

export default CountryBar;
