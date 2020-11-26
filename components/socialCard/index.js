import React from "react";
import Typography from "@material-ui/core/Typography";
import style from "./style.module.css";

const SocialCard = (props) => {
  const { bgColor, icon, title, caption } = props;
  return (
    <div className={style.root} style={{ background: bgColor }}>
      <div className="pr-18">
        <img src={icon} />
      </div>
      <div>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="caption" style={{ color: "#fff" }}>
          {caption}
        </Typography>
      </div>
    </div>
  );
};

export default SocialCard;
