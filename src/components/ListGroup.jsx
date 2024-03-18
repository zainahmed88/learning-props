import { useState } from "react";

function ListGroup(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {props.items.map((item) => (
          <li
            key={item.key}
            className={
              selectedIndex === item.key
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(item.key);
              props.onSelectItem(item.value);
            }}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
