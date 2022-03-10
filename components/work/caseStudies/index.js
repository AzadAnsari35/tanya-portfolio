import React from "react";
import Typography from "@material-ui/core/Typography";
import style from "./style.module.css";
import Card from "../../card";
import Grid from "@material-ui/core/Grid";

const CaseStudies = () => {
  return (
    <div id="case-studies">
      <Typography variant="h5" align="center">
        Case Studies
      </Typography>
      <Grid container spacing={4} className={style.container}>
        <Grid item xs={12} lg={4} className="d-flex justify-content-center">
          <Card
            caption="Growe.ai - A mentorship Platform"
            imgPath="/case1.png"
            altText="grow"
            width={394}
            height={394}
            link="case-studies/groww"
            isCaseStudy={true}
          />
        </Grid>

        <Grid item xs={12} lg={4} className="d-flex justify-content-center">
          <Card
            caption="Digital Electronic Medication Administration Record"
            imgPath="/case2.png"
            altText="grow"
            width={394}
            height={394}
            isCaseStudy={true}
            link="case-studies/medication"
          />
        </Grid>

        <Grid item xs={12} lg={4} className="d-flex justify-content-center">
          <Card
            // caption="Grow - B2B Employee Engagement"
            imgPath="/case3.png"
            altText="grow"
            width={394}
            height={394}
            isCaseStudy={true}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CaseStudies;
