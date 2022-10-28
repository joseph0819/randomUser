import React from "react";
import { useEffect } from "react";
import "./index.css";
import axios from "axios";
import { useState } from "react";
import Users from "./Users";
import Pages from "./Pages";
import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  console.log(profile);
  useEffect(() => {
    const users = async () => {
      setLoading(true)
      const dummyUsers = await axios.get(
        "https://randomuser.me/api/?page=1&results=50&nat=us"
      );
      setLoading(false)
      setProfile(dummyUsers.data.results);
      setPages(Math.ceil(dummyUsers.data.results.length / 5))
      
    };
    users();
  }, []);

  console.log(pages);

  const handlePageChange = (num) =>{
    setPage(num)
  }
  return (
    <div className="App">
      <p>page{currentPage}</p>
     
      <h1 className="head">Alt School Students </h1>
      <p>alt school front-end engineering student</p>
      {loading ? <p>loading...</p> : 
      <Users page={currentPage} profile={profile}/> }
      <Pages pages={pages} handlePageChange={handlePageChange}/>
   
    </div>

    
  );
};
export default App;
