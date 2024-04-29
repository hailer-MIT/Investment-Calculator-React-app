import { useState } from 'react';
import Header from './Components/Header/Header';
import Result from './Components/Result/Result';
import UserInput from './Components/UserInput/UserInput';

function App() {
  const [userInput,setuserInput] = useState(null);
  const [initial, setinitial]= useState(null);
  const yearlyData = []; 
  const calculateHandler = (userInput,InitialUserInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    setuserInput(userInput); 
    setinitial(InitialUserInput);
  }
  if(userInput){ 
    
      let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput['expected-return'] / 100;
      const duration = +userInput['duration'];

      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }     
}
  return ( 
    <div>
    <Header />
    
    <UserInput onSubmit={calculateHandler}/>
    { !userInput && <h1 style={{ textAlign: "center", color: 'red'}} >No investment created for this app.</h1>}
    { userInput && <Result data={yearlyData} cursav={initial["current-savings"]}  /> }    
    </div>
      );
  };
export default App;
