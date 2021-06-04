import React, { useState, useEffect } from "react";
import Main from "../components/organisms/Main";
import "./Contact.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "@material-ui/core";
const Contact = () => {
  const [bgColour, setBgColour] = useState("#fafafa");
  const [name, setName] = useState("");
  const arrSV = useSelector((state) => state.array);
  const dispatch = useDispatch();
  const listItems = arrSV.map((item) => <li key={item.id}>{item.name}</li>);
  const stylebtn = {
    padding: "10px 20px",
    background: `${bgColour}`,
    fontWeight: "600",
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {});
  const themMoi = () => {
    const newItem = {
      name: name,
      id: Math.random(),
    };
    dispatch({
      type: "ADDITEM",
      newItem: newItem,
    });
  };
  return (
    <Main>
      <input type="text" id="input_name" value={name} onChange={handleChange} />
      <button
        style={stylebtn}
        onMouseEnter={() => {
          setBgColour("#c83f49");
        }}
        onMouseLeave={() => {
          setBgColour("#fafafa");
        }}
        onClick={themMoi}
      >
        Add
      </button>
      <hr />
      <ul>{listItems}</ul>
      <div className="change">
        <h1>
          this is h1
          <Link>this is a</Link>
        </h1>
      </div>
    </Main>
  );
};
export default Contact;
