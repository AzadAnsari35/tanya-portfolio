import React from "react";
import Typography from "@material-ui/core/Typography";
import CaseStudies from "./caseStudies";
import style from "./style.module.css";

const Work = () => {
  return (
    <div id="work" className={`container ${style.root}`}>
      <Typography className={style.heading} variant="h3">
        Work
      </Typography>
      <CaseStudies />
    </div>
  );
};

export default Work;
