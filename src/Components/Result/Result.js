import React from 'react';
import styles from "./Result.module.css"

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function Result(props) {
  return (
    <div>
        <table className={styles.result}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
        <tbody>
         { props.data.map(yeardata =>
                    <tr key={yeardata.year}>
                        <td>{yeardata.year}</td>
                        <td>{formatter.format(yeardata.savingsEndOfYear)}</td>
                        <td>{formatter.format(yeardata.yearlyInterest)}</td>
                        {/* <td>{yeardata.year}</td>
                        <td>{yeardata.year}</td> */}
                        
                        <td>{formatter.format(yeardata.savingsEndOfYear -props.cursav-yeardata.yearlyContribution * yeardata.year)}</td>
                        <td>{ formatter.format(yeardata.savingsEndOfYear + yeardata.yearlyContribution * yeardata.year)}</td>
                    </tr>
          )}
        </tbody>
        </table>
      
    </div>
  )
}

export default Result;