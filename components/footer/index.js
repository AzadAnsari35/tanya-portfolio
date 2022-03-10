import React from "react";
import Typography from "@material-ui/core/Typography";
import SocialCard from "../socialCard";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CopyrightIcon from "@material-ui/icons/Copyright";
import style from "./style.module.css";

const Footer = () => {
  return (
    <div className={`container ${style.root}`}>
      <Typography variant="h2" className="pb-54">
        An idea in mind?
        <br /> Let’s Discuss
      </Typography>
      <div
        className={`d-flex justify-content-between ${style.contact_details}`}
      >
        <div>
          <a href="mailto:recipient@domain.com?cc=other@domain.com">
            <Button className={style.button}>Contact Me</Button>
          </a>
        </div>
        <div className={`color-white ${style.footerInfo}`}>
          <Typography variant="body1" className="pb-70">
            Email -
            <br /> tanyanarangux@gmail.com
          </Typography>
          <Typography variant="body1" className="d-flex align-items-center">
            <CopyrightIcon />
            2022 Tanya Narang
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
