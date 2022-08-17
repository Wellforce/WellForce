// import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Preferences.css";
import ApiClient from "../Services/apiClient";
import { useNavigate } from "react-router";
import apiClient from "../Services/apiClient";
export default function Preference() {
  const Navigate = useNavigate();
  const [checked, setChecked] = useState([]);
  const checkList = [
    "Yoga",
    "Meditation",
    "Journaling",
    "Cardio",
    "Dancing",
    "Strength Training",
    "Breathwork",
    "Bookclub",
    "Soccer",
    "Basketball",
  ];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + "," + item;
      })
    : "";

  // Return classes based on whether item is checke
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const checkedArray = checkedItems.split(",");

  function handleOnSubmit() {
    if (checkedItems.split(",").length != 5) {
      window.alert("Please click on 5 items");
    } else if (ApiClient.checkIfPrefExists()) {
      console.log("user already has preferences preferences will be updated");
      apiClient.UpdatePreferences(checkedArray);

      Navigate("/Dashboard");
    } else {
      ApiClient.postPreferences(checkedArray);
      Navigate("/Dashboard");
    }
  }

  console.log(checkedItems, checkedItems.split(",").length);
  return (
    <div className="app">
      <div className="checkList">
        <div className="title">Select your Wellness Activities:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="display-checked">{`Activities checked are: ${checkedItems}`}</div>
      <div className="preference-button">
        <button
          className="btn preference"
          onClick={handleOnSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
