import React from "react";

const NewsDisplay = ({ apiArticles, makeModal }) => {
  return (
    apiArticles &&
    apiArticles.map((array) => (
      <div className="articleImgAndTitleAndContent">
        <img alt="이미지 없음" src={array.urlToImage}></img>
        <div>
          <a className="articleTitle" href={array.url}>
            {array.title}
          </a>
          <div
            id="articleContnet"
            onClick={makeModal}
            className={array.url}
            title={array.title}
          >
            {array.content}
          </div>
        </div>
      </div>
    ))
  );
};
export { NewsDisplay };
