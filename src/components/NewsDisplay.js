import React, { useEffect } from "react";

const NewsDisplay = ({ onSubmit, APIarticles }) => {
  const articles = APIarticles;
  console.log(articles);
  return (
    articles &&
    articles.map((array) => (
      <div>
        <div>
          <div> {array.title}</div>
          <div> {array.content} </div>
        </div>
      </div>
    ))
  );
};
export { NewsDisplay };
