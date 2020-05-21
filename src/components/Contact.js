import React, { useState } from "react";
import { Prompt } from "react-router-dom";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onClick = (isChecked) => {
    setIsChecked(isChecked);
  };

  console.log(isChecked)

  return (
    <div>
      <button
        type="button"
        className="btn btn-default"
        onClick={() => onClick(false)}
      >
        Cho phép
      </button>{" "}
      <br />
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onClick(true)}
      >
        Không Cho phép
      </button>
      <Prompt
        when={isChecked}
        message={(location) => `Bạn chắc chắn muốn đi đến ${location.pathname}`}
      />
    </div>
  );
};

export default Contact;
