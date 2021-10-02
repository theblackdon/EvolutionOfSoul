import React from "react";
import { Link } from "react-router-dom";

const ListGroup = (props) => {
  return (
    <ul className="list-group">
      {props.items.map((item) => (
        <Link key={item._id} to={`/artist/${item._id}`}>
          <li>{item.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default ListGroup;
