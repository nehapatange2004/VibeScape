import React from "react";
// import { useRef } from "react";
import { useState, useEffect } from "react";

interface SearchProps{
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}
export default function Search({setSearchQuery}: SearchProps ) {

  const placeholder = "Find aesthetics, travel✈️, quotes, art🎨 and more...";
  const [isTyping, setIsTyping] = useState(false);
  let [currPlaceholder, setCurrPlaceholder] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const handleClick= ()=> setSearchQuery(searchVal);
  useEffect(() => {
    // if (isTyping) {
    //   setCurrPlaceholder("");
    //   return;
    // }
    let i = 0,
      prev = "";
    setCurrPlaceholder("");
    const interval = setInterval(() => {
      // console.log("placeholder: ", placeholder[i], " ");
      prev += placeholder[i];
      setCurrPlaceholder(prev);
      // setCurrPlaceholder((prev) => {
      //   console.log("prev: ", prev);
      //   return (prev + placeholder[i])
      // });
      i++;
      if (i === placeholder.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isTyping]);

  const searchbar = (
    <div className="d-flex justify-content-center search-block">
      <div className="d-flex justify-content-center search-plus-icon">
        <input
          type="search"
          id="search"
          autoComplete="off"
          placeholder={currPlaceholder}
          onBlur={() => setIsTyping(false)}
          onFocus={() => setIsTyping(true)}
          onChange={(event) => {
            if (event.target) {
              setSearchVal((event.target as HTMLInputElement).value);
            }
          }}
        />

        <div className="btn d-flex justify-content-center align-items-center ">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => {
              handleClick();
            }}
          ></i>
        </div>
      </div>
    </div>
  );

  return searchbar;
}
// export const searchRefid ()=> {
//   return searchRef;
// }
// export const searchRefId = {searchRef}
