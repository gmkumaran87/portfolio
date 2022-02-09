import React from "react";

const List = (props) => {
  const { option, menuOpen, setMenuOpen } = props;

  return (
    <li onClick={() => setMenuOpen(!menuOpen)}>
      <a href={`#${option}`}>{option}</a>
    </li>
  );
};

export default List;
