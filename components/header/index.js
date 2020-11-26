import React from 'react'
import style from './style.module.css'

const Header = () => {


    return (
        <header className={style.root}>
            <img src="logo.svg" />
            <div className={style.right}>
            <img src="equal.svg" />
            </div>
        </header>
    )
}

export default Header
