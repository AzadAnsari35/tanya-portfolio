import React from "react";
import Typography from "@material-ui/core/Typography";
import style from "./style.module.css";

const About = () => {
  return (
    <div id="about" className={`container ${style.root}`}>
      <Typography className={style.heading} variant="h3">
        About Me
      </Typography>
      <div className={`d-flex ${style.about_content}`}>
        <div className="pr-60">
          <img src="/tanya.png" alt="my photo" className="border-radius-40" />
        </div>
        <div>
          <Typography variant="body1" className="pb-32">
            Hi I am Tanya Narang. For me design is a way to know more of me and
            surroundings around.
          </Typography>
          <Typography variant="body1" className="pb-32">
            I feel that God is the most perfect designer and i take most of my
            inspirations from the nature around.
          </Typography>
          <Typography variant="body1" className="pb-32">
            I have a deep interest in writing blogs and reading books.
          </Typography>
          <Typography variant="body1" className="pb-32">
            I was never born with a sense of details and visual design. All i
            have learnt through hit and trial and my failures and that makes me
            a better personality of myself.
          </Typography>
          <Typography variant="body1" className="pb-32">
            I personally feel design not only helps in digital and product
            creation but learning sports and arts also. Everything is comprised
            of little attentions and symmetry but with design our mind is
            capable of getting those finest details.
            <br /> I feel very lucky to be evolving with this profession.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
