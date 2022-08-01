import { useState } from "react";





export default function Preference() {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [prefCap,setPrefCap] = useState(false);
    const [form, setForm] = useState({
      isChe:"",
      last_name:"",
      email: "",
      password: "",
      passwordConfirm: "",
      username:"",
    })
    // const [isChecked7, setIsChecked7] = useState(false);
    var count = 0;
    const handleOnChange1 = () => {
      setIsChecked1(!isChecked1);
      isChecked1? count ++ : count--;
      console.log("count:",count);
    };
    console.log("count:",count);
    const handleOnChange2 = () => {
        setIsChecked2(!isChecked2);
        isChecked1? count ++ : count--;
        console.log("count:",count);
      };
      const handleOnChange3 = () => {
        setIsChecked3(!isChecked3);
        isChecked1? count ++ : count--;
        console.log("count:",count);
      };
      const handleOnChange4 = () => {
        setIsChecked4(!isChecked4);
        isChecked1? count ++ : count--;
      };
      const handleOnChange5 = () => {
        setIsChecked5(!isChecked5);
        isChecked1? count ++ : count--;
      };
      const handleOnChange6 = () => {
        setIsChecked6(!isChecked6);
        isChecked1? count ++ : count--;
      };
    //   const handleOnChange7 = () => {
    //     setIsChecked7(!isChecked7);
    //     isChecked1? count ++ : count--;
    //   };
    function handleOnSubmit(){
        if (count > 5){
           setPrefCap(true)
        
      }
    }
    console.log("count:",count)
    return (
      <div className="App">
        Select your Preferences(Please choose up to 5):
       
        <div className="activity">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked1}
            onChange={handleOnChange1}
          />
         meditation
        </div>
        <div className="activity">
          <input
            type="checkbox"
            id="toppings"
            name="toppings"
            value="Paneers"
            checked={isChecked2}
            onChange={handleOnChange2}
          />
         Yoga
        </div>
        <div className="activity">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked3}
            onChange={handleOnChange3}
          />
         Journaling
        </div>
        <div className="activity">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked4}
            onChange={handleOnChange4}
          />
          Cardio
        </div>
        <div className="activity">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked5}
            onChange={handleOnChange5}
          />
          Dancing
        </div>
        <div className="activity">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked6}
            onChange={handleOnChange6}
          />
          Strength Training
        </div>
        <button onSubmit= {handleOnSubmit}> submit form</button>
      </div>
      
    );
  }
