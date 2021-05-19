import React, { useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar() {
  const searchbar = useRef("");
  const searchinput = useRef("");

  const animatesearchbar = () => {
    searchbar.current.style.width = "500px";
    searchinput.current.style.width = "480px";
  };
  const normalsearchbar = () => {
    searchbar.current.style.width = "300px";
    searchinput.current.style.width = "280px";
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#605e7c",
        borderRadius: "5px",
        padding: "10px",
        width: "300px",
        transition: ".5s"
      }}
      ref={searchbar}
    >
      <SearchIcon />
      <input
        ref={searchinput}
        style={{
          background: "transparent",
          color: "white",
          fontSize: "16px",
          border: "none",
          outline: "none"
        }}
        type="search"
        placeholder="Search..."
        onFocus={animatesearchbar}
        onBlur={normalsearchbar}
      />
    </div>
  );
}
