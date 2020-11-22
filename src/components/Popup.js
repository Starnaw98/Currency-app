import React from "react";

export default function Popup(props) {
  return (
    <div className="popup" >
      <h2>
        {props.deleted_element === ""
          ? "Jesteś pewien, że chcesz usunąć całą listę?"
          : "Jesteś pewien, że chcesz usunąć tę walutę?"}
      </h2>
      <div>
          <button
            onClick={() => {
              props.turn_off_or_on(false);
              props.deleting_fun(props.deleted_element);
            }}
          >
            {" "}
            Tak{" "}
          </button>
          <button onClick={() => props.turn_off_or_on(false)}> Nie </button>
      </div>
    </div>
  );
}
