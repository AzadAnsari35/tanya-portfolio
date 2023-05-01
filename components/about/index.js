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
          <Typography variant="subtitle2" className="pb-32">
            Hello, I'm Tanya Narang, and to me, design is a means of exploring
            myself and the world around me. One of my biggest interests is
            traveling, as it allows me to gain new perspectives and inspiration.
          </Typography>
          <Typography variant="subtitle2" className="pb-32">
            I draw my inspiration from the natural world, and I believe that God
            is the ultimate designer of everything we see.
          </Typography>
          <Typography variant="subtitle2" className="pb-32">
            Aside from my passion for design and travel, I also love to read and
            write blogs.
          </Typography>
          <Typography variant="subtitle2" className="pb-32">
            I wasn't born with an innate sense of detail and visual design, but
            I've learned a great deal through trial and error, as well as my
            failures, which have helped me grow into a better version of myself.
          </Typography>
          <Typography variant="subtitle2" className="pb-32">
            I firmly believe that design not only plays a crucial role in
            creating digital and physical products, but it also plays a part in
            learning sports and arts. Everything is composed of little details
            and symmetry, and design allows us to appreciate the finest nuances.
          </Typography>
          <Typography variant="subtitle2" className="pb-32">
            I feel incredibly grateful to be part of this field as I continue to
            evolve and grow as a designer.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
