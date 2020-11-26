import React from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const Card = (props) => {
  const { caption, link = "/", imgPath, altText, width, height } = props;
  return (
    <Link href={link}>
      <div style={{ width }} className="cursor-pointer">
        <img
          src={imgPath}
          alt={altText}
          width={width}
          height={height}
          className="border-radius-8 img"
        />

        <Typography variant="caption">{caption}</Typography>
      </div>
    </Link>
  );
};

export default Card;
