// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Preferences.css";
import ApiClient from "../Services/apiClient";
export default function Preference() {
  const [checked, setChecked] = useState([]);
  const checkList = [
    "Yoga",
    "Meditation",
    "Journaling",
    "Cardio",
    "Dancing",
    "Strength Training",
    "Breathwork",
    "BookClub",
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
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checke
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const checkedArray = checkedItems.split(',');

  function handleOnSubmit() {
    ApiClient.postPreferences(checkedArray);
  }

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
   
      <div>{`Activities checked are: ${checkedItems}`}</div>
      <div className="preference-button">
 
          
          <button onClick={handleOnSubmit} className="preference">
            Submit
          </button>
      
      </div>
    </div>
  );
}
