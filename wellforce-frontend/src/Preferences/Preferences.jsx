// import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Preferences.css";
import ApiClient from "../Services/apiClient";
import { useNavigate } from "react-router";
import apiClient from "../Services/apiClient";
export default function Preference({isLoggedin, setIsLoggedin}) {

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
const [prefExist, setPrefExist] = useState(false);
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
  useEffect(() => {
    const getPrefStatus = async () => {const res = await ApiClient.checkIfPrefExists() 
    setPrefExist(res.data)
    console.log("pref Exist res;",res.data)
    }
    getPrefStatus()
    
    
  }, []);
  if (prefExist.isPrefChecked) {

    console.log(
      "user already has preferences, you will be redirected to dashboard"
    );
    //in component dashboard preferences always redirects to 
      if(window.location.pathname === "/Dashboard"){

      }
      else{
     Navigate("/Dashboard");
      }
  }
  console.log("pref Exist;",prefExist.isPrefChecked)
  function handleOnSubmit() {
    if (prefExist.isPrefChecked) {
      console.log("does pref exist work in handleOnSubmit",prefExist)
      console.log("user already has preferences preferences will be updated");
      apiClient.UpdatePreferences(checkedArray);
      if(window.location.pathname == "/")
    
      Navigate("/preference");
    } else {
      ApiClient.postPreferences(checkedArray);
      Navigate("/Dashboard");
    }
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

      <div className="display-checked">{`Activities checked are: ${checkedItems}`}</div>
      <div className="preference-button">
        <button className="btn preference" onClick={handleOnSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
