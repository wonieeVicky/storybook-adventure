import React from "react";

const Hello = ({ name, big, small }) => {
  if (big) {
    return <h1>안녕하세요, {name}!</h1>;
  }
  if (small) {
    return <small>안녕하세요, {name}</small>;
  }
  return <p>안녕하세요, {name}!</p>;
};

export default Hello;
