import React, { useState } from "react";
import Link from "next/link";
import style from "./style.module.css";

const Header = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <header className={style.root}>
      <Link href="/">
        <img src="/logo.svg" />
      </Link>
      <div className={style.right}>
        <button
          id={style.btn}
          className={isClose ? style.on : ""}
          onClick={() => setIsClose(!isClose)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
