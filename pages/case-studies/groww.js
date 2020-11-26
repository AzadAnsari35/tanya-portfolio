import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Grow = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#0057ff",
          color: "white",
          paddingTop: 200,
          paddingBottom: 200,
        }}
        className={`case-study-container`}
      >
        <Typography variant="h2" className="pb-24">
          The Problem
        </Typography>
        <Typography variant="caption">
          To find a mentor with similar interests and goals who can help in
          achieving gaols in a personalised and customised way.
        </Typography>

        <Typography variant="body1" className=" pt-66 pb-66">
          Most of the people usually face the problem of understanding where
          they are going in skill learning and by the time they realise which
          direction to go to, they end up wasting a lot of time finding the best
          course, material, learnings available in the market. They spend a lot
          of time working on the wrong processes because with a lot of
          directions they often get confused where to go and keep changing
          things in life.
        </Typography>
        <Typography variant="body1">
          If people get a personalised mentor as per their learning who helps
          them with their similar experiences which the mentee is currently
          facing, a lot of things might make sense and the mentee knows that
          this is the right person to get ahead with, who can help him/her grow
          as a customised path of learning specially created and curated for
          him.
        </Typography>
      </div>
      <div className={`case-study-container`}>
        <Typography variant="h2" className="pb-24" color="textPrimary">
          My Role
        </Typography>
        <Typography variant="body1" className="pb-32">
          As a Product Designer I was responsible for building the experience
          strategy and design of the ios/android app.
        </Typography>
        <Typography variant="body1" className="pb-32">
          I worked on this project as a team of one where I handled the end to
          end communication with the development and the product team.
        </Typography>
        <Typography variant="body1" className="pb-32">
          I had conducted User Research with almost 50-100 people and collided
          the data in a product requirement document.
        </Typography>
        <Typography variant="h2" className="pb-24" color="textPrimary">
          The Solution
        </Typography>
        <Typography variant="body1" className="pb-32">
          The solution is to create an application with the Mentor - Mentee
          Model where the Mentee will add the goal. On the basis of the goal,
          they will be given a list of available mentors and they can choose
          which mentor to go ahead with and start the learning journey.
        </Typography>
        <img src="/groww/solution.png" />
        <Typography variant="h2" className="pb-24" color="textPrimary">
          The Process
        </Typography>
        <Typography variant="body1" className="pb-32">
          1. User Research
          <br />
          2. Defining the challenges.
          <br />
          3. Ideation and Brainstrom <br />
          4. The final product
          <br />
          5. Conclusion
        </Typography>

        <Typography variant="h2" className="pb-24" color="textPrimary">
          User Research
        </Typography>
        <Typography variant="body1" className="pb-32">
          I did a research with 70 mentees which includes people working in the
          industry seeking a job, looking for internship or in final year in
          college
        </Typography>
        <Typography variant="h3" className="pb-12" color="textPrimary">
          Target Audience
        </Typography>
        <Typography variant="body1" className="pb-32">
          People with 0 - 5 years of experience.
        </Typography>
        <Typography variant="h3" className="pb-12" color="textPrimary">
          Interview Questionnaire
        </Typography>
        <Typography variant="body1" className="pb-32">
          1. What is the goal you are working towards right now? <br />
          2. Are you sure of this goal?
          <br /> 3. How important is this for your career?
          <br /> 4. What are the steps you are taking to complete this goal?
          <br /> 5. Are these steps helping you for proceeding in the right
          direction?
          <br /> 6. What if you will be provided a mentoe who will help you in
          your journey, providing you Feedback and direction at every step you
          take. Will you be intersted in learning in this way?
          <br /> 7. If yes, How much on a scale of 1 -10?
          <br /> 8. How much time can you dedicate in a day/week for this kind
          of mentorship?
          <br /> 9. If yes, Will you be willing to pay for this kind of
          mentorship?
          <br /> 10. How much can you pay in a month for this kind of app?
        </Typography>
        <Typography variant="h3" className="pb-12" color="textPrimary">
          Research Stats
        </Typography>
        <img src="/groww/stats.png" />
      </div>
    </div>
  );
};

export default Grow;
