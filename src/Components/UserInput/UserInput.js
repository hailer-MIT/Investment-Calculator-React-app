import { useState } from "react";
import React from 'react';
import styles from './UserInput.module.css'

const InitialUserInput = {
                            'current-savings' : '10000',
                            'yearly-contribution' : '1200',
                            'expected-return' : '7',
                          duration : '10'
                          };
const InitialUserInput2 = {
                            'current-savings' : '0',
                            'yearly-contribution' : '0',
                            'expected-return' : '0',
                          duration : '0'
                          };

const UserInput = (props) => {
  const [UserInput, setUserInput] = useState(InitialUserInput);
  const SubmitChangeHandler = (event) => {
    event.preventDefault();
    props.onSubmit(UserInput,InitialUserInput);
  };
  const resetHandler = () => {
   setUserInput(InitialUserInput2);
  };
  const InputChangeHandler = (name , value) => {
          console.log(name,value);
          setUserInput((prevstate) => {
            return { ...prevstate, [name] : value };
    })
   }
  //many updater (each for each)
  // const current-savingsICH = (event) => {   
  //       setUserInput( (prev) => {
  //           return { ...prev, current-savings : event.target.value, };
  //       });   
  // };
  // const yearly-contributionICH = (event) => {   
  //       setUserInput( (prev) => {
  //           return { ...prev, yearly-contribution:event.target.value,  };
  //       });   
  // };
  // const expected-returnICH = (event) => {   
  //       setUserInput( (prev) => {
  //           return { ...prev, expected-return:event.target.value,  };
  //       });   
  // };
  // const invdrICH = (event) => {   
  //       setUserInput( (prev) => {
  //           return { ...prev, duration:event.target.value,  };
  //       });   
  // };

  return (
    <div>
        <form className={styles.form} onSubmit={SubmitChangeHandler}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" 
            id="current-savings" 
            value={UserInput['current-savings']}
            onChange={ (event)=>  InputChangeHandler("current-savings", event.target.value) } />

          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" 
            value={UserInput['yearly-contribution']}
            id="yearly-contribution" 
            onChange={ (event)=>  InputChangeHandler("yearly-contribution", event.target.value) }  />
          </p> 
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input 
            value={UserInput['expected-return']}
            onChange={ (event)=>  InputChangeHandler("expected-return", event.target.value) }  type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" 
            value={UserInput['duration']}
            id="duration" 
            onChange={ (event)=>  InputChangeHandler("duration", event.target.value) }  />
          </p>
        </div>
        <p className={styles.actions}>
          <button onClick={resetHandler} type="reset" className={styles.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

    </div>
  )
}

export default UserInput;