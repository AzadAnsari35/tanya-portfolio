import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "../card";
import style from "./style.module.css";
import Button from "@material-ui/core/Button";

const Writings = () => {
  return (
    <div className={`container ${style.root}`}>
      <Typography variant="h5" align="center" className="pb-20">
        Writings
      </Typography>
      <Grid container spacing={4} className={style.container}>
        <Grid item xs={12} lg={4} className="d-flex justify-content-center">
          <Card
            caption="The biggest elephant in the room of design"
            imgPath="/writing(1).png"
            altText="grow"
            width={394}
            height={394}
            link="https://medium.com/the-innovation/the-biggest-elephant-in-the-room-of-design-creative-block-ab3902554957"
          />
        </Grid>
        <Grid item xs={12} lg={4} className="d-flex justify-content-center">
          <Card
            caption="How being into UX design makes me a better person."
            imgPath="/writing(2).png"
            altText="grow"
            width={394}
            height={394}
            link="https://medium.com/an-idea/how-being-into-ux-design-makes-me-a-better-person-14a2d12dbf30"
          />
        </Grid>

        <Grid item xs={12} lg={4} className="d-flex justify-content-center">
          <Card
            caption="Getting started in UX/UI without a mentor"
            imgPath="/writing(3).png"
            altText="grow"
            width={394}
            height={394}
            link="https://medium.com/design-bootcamp/get-started-in-ux-ui-career-without-a-mentor-bc955ca7199"
          />
        </Grid>
      </Grid>
      <div className={style.buttonWrapper}>
        <Button className={style.button}>Read More</Button>
      </div>
    </div>
  );
};

export default Writings;
