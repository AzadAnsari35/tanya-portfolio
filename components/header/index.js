import React from "react";
import style from "./style.module.css";
import Link from 'next/link'


const Header = () => {
  return (
    <header className={style.root}>
        <Link href="/">
      <img src="/logo.svg" />
      </Link>
      <div className={style.right}>
        <img src="/equal.svg" />
      </div>
    </header>
  );
};

export default Header;
