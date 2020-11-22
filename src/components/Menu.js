import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="menu" >
      <li>
        <Link to="/">Waluty</Link>
      </li>
      <li>
        <Link to="/favorites">Ulubione</Link>
      </li>
    </ul>
  );
}
