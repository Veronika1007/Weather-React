import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  let [input, setInput] = useState("");
  let [city, setCity] = useState("");
  function getCity(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(input);
  }

  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter A City"
          id="searchForm"
          onChange={getCity}
        />
        <input type="submit" value="search" />
      </form>
      {city ? <Weather city={city} /> : ""}
    </div>
  );
}
