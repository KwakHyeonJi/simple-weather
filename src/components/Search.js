import React, { useState } from "react";
import styles from "./Search.module.css";
import { UilSearch } from "@iconscout/react-unicons";

const Search = ({ setCity }) => {
  const [input, setInput] = useState("");
  const searchCity = (e) => {
    if (e.key === "Enter") {
      setCity(input);
      setInput("");
    }
  };

  return (
    <div className={styles.search}>
      <UilSearch size={20} />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={searchCity}
        placeholder="Enter city name"
      ></input>
    </div>
  );
};

export default Search;
