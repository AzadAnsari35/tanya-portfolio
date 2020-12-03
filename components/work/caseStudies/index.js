import React from "react";
import Typography from "@material-ui/core/Typography";
import style from "./style.module.css";
import Card from "../../card";

const CaseStudies = () => {
  return (
    <div>
      <Typography variant="h5">Case Studies</Typography>
      <div className={style.container}>
        <div className="d-flex flex-direction-column">
          <Card
            caption="Grow - B2B Employee Engagement"
            imgPath="/case.png"
            altText="grow"
            width={640}
            height={496}
            link="case-studies/groww"
          />
        </div>

        <div className="d-flex align-items-end flex-direction-column">
          <Card
            caption="Savour - Restaurant business boosting app"
            imgPath="/case.png"
            altText="grow"
            width={640}
            height={496}
          />
        </div>

        <div className="d-flex flex-direction-column">
          <Card
            caption="Grow - B2B Employee Engagement"
            imgPath="/case.png"
            altText="grow"
            width={640}
            height={496}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
