import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios"
import ImagesLayout from "./components/imageslayout";
import Search from "./components/Search";
import NavBar from "./components/navbar";
import { useEffect } from "react";

function App() {
  const func1 = async function () {
    axios.get("http://localhost:5000/").then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log("error on comloing at client: ", err);
    });
  };

  useEffect(() => {
    func1();
  }, []);

  return (
    <>
      inside the app
    </>
  );
}

export default App;
