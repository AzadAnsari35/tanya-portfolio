import React from "react";
import Typography from "@material-ui/core/Typography";
import style from "./style.module.css";
import SocialCard from "../socialCard";
import Grid from "@material-ui/core/Grid";

const Social = () => {
  return (
    <div className={`container ${style.root}`}>
      <Typography className={style.heading} variant="h3">
        Let’s be friends
      </Typography>
      <Grid container spacing={4} className="pb-126">
        <Grid item xs={4}>
          <SocialCard
            bgColor="#FB3789"
            icon="/dribbble.svg"
            title="Dribbble"
            caption="Aesthetic UIs"
            link="https://dribbble.com/tanu_design"
          />
        </Grid>
        <Grid item xs={4}>
          <SocialCard
            bgColor="#0064FF"
            icon="/behance.svg"
            title="Behance"
            caption="Graphics Work"
            link="https://www.behance.net/tanyanarangux"
          />
        </Grid>
        <Grid item xs={4}>
          <SocialCard
            bgColor="#12100E"
            icon="/medium.svg"
            title="Medium"
            caption="Design Articles"
            link="https://tanunarang.medium.com/"
          />
        </Grid>

        <Grid item xs={4}>
          <SocialCard
            bgColor="#0A66C2"
            icon="/linkedin.svg"
            title="Linkedin"
            caption="Work Experience"
            link="https://www.linkedin.com/in/tanyanarang/"
          />
        </Grid>

        <Grid item xs={4}>
          <SocialCard
            bgColor="linear-gradient(259.1deg, #C01B7F 13.45%, #DA2648 59.86%, #EB7F37 98.71%)"
            icon="/instagram.svg"
            title="Instagram"
            caption="What i’m up to"
            link="https://www.instagram.com/azadanarkali/"
          />
        </Grid>

        <Grid item xs={4}>
          <SocialCard
            bgColor="#4BB4F2"
            icon="/twitter.svg"
            title="Twitter"
            caption="Random Thoughts"
            link="https://twitter.com/tanyanarang_"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Social;
