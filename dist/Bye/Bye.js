import React from "react";
import PropTypes from "prop-types";

const Bye = ({ name, big }) => {
  return big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>;
};

Bye.propTypes = {
  name: PropTypes.string,
  big: PropTypes.bool,
};

Bye.defaultProps = {
  big: false,
};

export default Bye;
