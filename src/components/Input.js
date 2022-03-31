import React, { useState } from "react";
import axios from "axios";
import { NewsDisplay } from "./NewsDisplay";

const Input = () => {
  const [inputContentValue, setinputContentValue] = useState("");
  const [inputData, setinputData] = useState("");
  const [APIarticles, setAPIarticles] = useState([]);

  const API = `https://newsapi.org/v2/everything?q=${inputContentValue}&from=${inputData}&to=${inputData}&sortBy=popularity&apiKey=4b96c49c883844e28e82e86e2480e9e1`;
  const axiosOn = () => {
    axios
      .get(API)
      .then((data) => {
        setAPIarticles(data.data.articles);
      })
      .catch(console.log("Error"));
  };
  //기사내용 입력하는 함수
  const inputOnChange = (event) => {
    setinputContentValue(event.target.value);
  };
  //submit 일때 실행 함수
  const onSubmit = (event) => {
    event.preventDefault();
    setinputContentValue("");
    axiosOn();
  };
  //날짜 바꾸는 함수
  const inputDataChange = (event) => {
    setinputData(event.target.value);
  };

  return (
    <div>
      <input type="date" value={inputData} onChange={inputDataChange}></input>
      <form onSubmit={onSubmit}>
        <input value={inputContentValue} onChange={inputOnChange}></input>
        <button></button>
      </form>
      <NewsDisplay onSubmit={onSubmit} APIarticles={APIarticles}></NewsDisplay>
    </div>
  );
};

export { Input };
