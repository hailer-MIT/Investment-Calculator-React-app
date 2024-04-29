import React from 'react'
import logo from '../../assets/investment-calculator-logo.png';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <img src={logo} alt="logo" />
                <h1> <span style={{ color: 'yellow' }}> Hailom's</span> Investment Calculator</h1>
            </header>
        </div>
    )
}

export default Header;