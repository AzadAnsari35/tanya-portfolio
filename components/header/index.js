import React, { useState } from "react";
import Link from "next/link";
import style from "./style.module.css";
import { useRouter } from "next/router";
import HomeIcon from "@material-ui/icons/Home";

const Header = () => {
  const [isClose, setIsClose] = useState(false);
  const router = useRouter();

  const handleNavigation = (e) => {
    const el = e.target;
    const val = el.getAttribute("href");
    if (val) setIsClose(false);
  };

  return (
    <header className={style.root}>
      <Link href="/">
        <img src="/logo.svg" />
      </Link>
      {router.pathname === "/" ? (
        <div
          className={`${style.right} ${isClose ? style.__active : ""}`}
          onClick={() => setIsClose(!isClose)}
        ></div>
      ) : (
        <HomeIcon style={{ fontSize: 50 }} onClick={() => router.push("/")} />
      )}
      <div
        className={style.overlay}
        style={isClose ? { height: "100%" } : {}}
        onClick={handleNavigation}
      >
        <div className={style.overlay_content}>
          <a href="#about">About</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#writings">Writings</a>
          <a href="#contact">Let’s be friends</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
