import React, { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";

const Grow = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  function handleSubmit() {
    setValue(inputRef.current.value);
  }

  if (value === "12345")
    return (
      <div>
        <Box
          py={25}
          color="white"
          bgcolor="#0057ff"
          mb={40}
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
            direction to go to, they end up wasting a lot of time finding the
            best course, material, learnings available in the market. They spend
            a lot of time working on the wrong processes because with a lot of
            directions they often get confused where to go and keep changing
            things in life.
          </Typography>
          <Typography variant="body1">
            If people get a personalised mentor as per their learning who helps
            them with their similar experiences which the mentee is currently
            facing, a lot of things might make sense and the mentee knows that
            this is the right person to get ahead with, who can help him/her
            grow as a customised path of learning specially created and curated
            for him.
          </Typography>
        </Box>
        <div className={`case-study-container`}>
          <Box pb={40}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              My Role
            </Typography>
            <Typography variant="body1" className="pb-32">
              As a Product Designer I was responsible for building the
              experience strategy and design of the ios/android app.
            </Typography>
            <Typography variant="body1" className="pb-32">
              I worked on this project as a team of one where I handled the end
              to end communication with the development and the product team.
            </Typography>
            <Typography variant="body1" className="pb-32">
              I had conducted User Research with almost 50-100 people and
              collided the data in a product requirement document.
            </Typography>
          </Box>

          <Box pb={40}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              The Solution
            </Typography>
            <Typography variant="body1" className="pb-32">
              The solution is to create an application with the Mentor - Mentee
              Model where the Mentee will add the goal. On the basis of the
              goal, they will be given a list of available mentors and they can
              choose which mentor to go ahead with and start the learning
              journey.
            </Typography>
            <img
              src="/groww/solution.png"
              style={{ objectFit: "contain" }}
              width="100%"
              height="100%"
            />
          </Box>

          <Box pb={40}>
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
          </Box>

          <Box pb={40}>
            <Box pb={20}>
              <Typography variant="h2" className="pb-24" color="textPrimary">
                User Research
              </Typography>
              <Typography variant="body1" className="pb-32">
                I did a research with 70 mentees which includes people working
                in the industry seeking a job, looking for internship or in
                final year in college
              </Typography>
            </Box>

            <Box pb={20}>
              <Typography variant="h3" className="pb-12" color="textPrimary">
                Target Audience
              </Typography>
              <Typography variant="body1" className="pb-32">
                People with 0 - 5 years of experience.
              </Typography>
            </Box>

            <Box pb={20}>
              <Typography variant="h3" className="pb-12" color="textPrimary">
                Interview Questionnaire
              </Typography>
              <Typography variant="body1" className="pb-32">
                1. What is the goal you are working towards right now? <br />
                2. Are you sure of this goal?
                <br /> 3. How important is this for your career?
                <br /> 4. What are the steps you are taking to complete this
                goal?
                <br /> 5. Are these steps helping you for proceeding in the
                right direction?
                <br /> 6. What if you will be provided a mentoe who will help
                you in your journey, providing you Feedback and direction at
                every step you take. Will you be intersted in learning in this
                way?
                <br /> 7. If yes, How much on a scale of 1 -10?
                <br /> 8. How much time can you dedicate in a day/week for this
                kind of mentorship?
                <br /> 9. If yes, Will you be willing to pay for this kind of
                mentorship?
                <br /> 10. How much can you pay in a month for this kind of app?
              </Typography>
            </Box>

            <Box pb={20}>
              <Typography variant="h3" className="pb-12" color="textPrimary">
                Research Stats
              </Typography>
              <img
                src="/groww/stats.png"
                style={{ objectFit: "contain" }}
                width="100%"
                height="100%"
              />
            </Box>
          </Box>

          <Box pb={40}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              User Persona
            </Typography>
            <Grid container>
              <img
                src="/groww/persona.png"
                style={{ objectFit: "contain" }}
                width="100%"
                height="100%"
              />

              {/* <Grid item xs={4}></Grid>
          <Grid item xs={8}></Grid> */}
            </Grid>
          </Box>

          <Box pb={40}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              Initial App flow
            </Typography>

            <Typography variant="body1" className="pb-32">
              To test the initial requirements we just built a simple flow
              without any design criteria just to understand the challenges and
              did pilot run with almost 100 users. So the flow create was like
              this-
            </Typography>
            <Box display="flex" justifyContent="center">
              <img
                src="/groww/app-flow.png"
                style={{ objectFit: "contain" }}
                width="100%"
                height="100%"
              />
            </Box>
          </Box>

          <Box pb={40}>
            <Box pb={20}>
              <Typography variant="h2" className="pb-24" color="textPrimary">
                The Challenges
              </Typography>
              <Typography variant="body1" className="pb-32">
                After creating the first basic product, we have pilot run it
                with a fixed set of users and on the basis of it, I have
                overcome the following challenges
              </Typography>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                1. Finding the correct match
              </Typography>
              <Box display="flex">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  Finding the correct match is really important to fulfil goal
                  and understand that both the mentor and mentee are aligned in
                  their expectations. Earlier this was a challenge for us when
                  we were doing this match manually or randomly. Because most of
                  the time in the first and second session mentee or mentor
                  loose interest and trust in the process because of not finding
                  the correct match therefore, we as a team developed an
                  alogrithm to find the perfact match as per user’s interests
                  and skills and show the mentee the match percentage. With
                  research, I came to understand that experience of both the
                  person also matters in the matching process therefore, I have
                  taken that in consideration and came with the algorithm to
                  find the perfect match.
                </Typography>
                <img src="/groww/1.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                2.After Match, Communication and Ice breaking
              </Typography>
              <Box display="flex" alignItems="end">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  The other challenge I got was the communication part between
                  the mentor and the mentee. Most of the time Mentor would not
                  initiate as they think that they are the superior in realtion
                  and the mentee should start the conversation and mentee
                  sometimes did not find the correct format to start the
                  conversation and this was the loophole we get to understand
                  after a long time. We struggle with this part to make
                  meaningful relation between the mentee and the mentor. so that
                  the mentee can easily share their problems with the mentor and
                  the mentor can understand the situation of the mentee and help
                  them in a better way. So to resolve this challenge we have
                  came up with series of ice breaking formats which the mentee
                  would ask the mentor to make the relation stronger and better.
                </Typography>
                <img style={{ objectFit: "contain" }} src="/groww/2.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                3. Time Syncing for meetings
              </Typography>
              <Box display="flex">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  So, the next challenge which arose as a part of this mentoring
                  journey was syncing the available time for both the mentor and
                  mentee. So, most of the time mentor creates a meeting and on
                  the scheduled time mentee would not show up and vice versa.
                  So, to understand why is this happening we asked the mentor
                  and mentee the reason of so many misssed meetings. I came to
                  the understanding that they need the calendar integration
                  along with a confirmation from the other party about them
                  joining the call so that they only show up if the other person
                  has confirmed about the meeting.
                </Typography>
                <img src="/groww/3.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                4. Measuring the progess
              </Typography>
              <Box display="flex">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  Progress in an integral part of the goal and most of the times
                  it is really necessary for the mentee to see and measure their
                  progress so that they are disciplined and determined to
                  achieve the goal. As the goal is a long time committment and
                  most of the working employees give up in between working of
                  the goal. So to motivate them and to keep them going it was
                  really important to provide them rea time progress of their
                  time work and investment. So, after a lot of research and
                  understanding we divided the goals into tasks and tasks into
                  skills and we provide them the graph of the progress on the
                  basis of how they are performing in their respective tasks.
                  There were a lot of discussions on the rating as well,
                  wheather it should be a star based rating or points based out
                  of 10 and I tend to understand that the mentees were mor
                  intersted in incresing their star rating instead of their
                  number grade therefore the system was star rating based.
                </Typography>
                <img src="/groww/4.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                5. Managing the notes
              </Typography>
              <Box display="flex">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  So, the next challenge they came across is to add the notes
                  and managing them so the next time the mentee and mentor want
                  to take note of, it should be organised in a way that there is
                  ease in using and accessing the notes. Also we get to know
                  that most of the notes are sometimes from the chat which the
                  user has to take a lot of effor to copy and paste the messages
                  in the notes. So we came up with feature of add ing the
                  message to notes at double tap of the message. It helps the
                  user to arrange and add the notes easily.
                </Typography>
                <img src="/groww/5.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                6. Engagement of both mentee and mentor
              </Typography>
              <Box display="flex">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  Engagement was very necessary because its a two way process.
                  Even losing the interest from a single person side will be the
                  losss of both. So, I wanted a technique where the user feels
                  good and motivated about using the application. I have gone
                  through the book “Hooked” and came to get a few rules to make
                  this goal a habit for the user. So below are a few techniques
                  to make the user feel engaged - 1) Rewards for mentee. 2)?
                  Recognition for mentor in the profile.
                </Typography>
                <img src="/groww/6.png" />
              </Box>
            </Box>
          </Box>

          <Box pb={40}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              Features
            </Typography>
            {/* <Box display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="center" flexDirection="column">
              <img src="/icons/ai.svg" />
              <Typography variant="body1" className="pb-24" color="textPrimary">
                AI Based Matching
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <img src="/icons/easy.svg" />
              <Typography variant="body1" className="pb-24" color="textPrimary">
                Easy Scheduling
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <img src="/icons/Personalised.svg" />
              <Typography variant="body1" className="pb-24" color="textPrimary">
                Personalised Feedback
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="center" flexDirection="column">
              <img src="/icons/reward.svg" />
              <Typography variant="body1" className="pb-24" color="textPrimary">
                Rewards and Recognition
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <img src="/icons/task.svg" />
              <Typography variant="body1" className="pb-24" color="textPrimary">
                Task Based Experiential Learning
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <img src="/icons/smart.svg" />
              <Typography variant="body1" className="pb-24" color="textPrimary">
                Smart Chat
              </Typography>
            </Box>
          </Box> */}
            <img
              src="/groww/features.png"
              style={{ objectFit: "contain" }}
              width="100%"
              height="100%"
            />
          </Box>
        </div>
        <Box bgcolor="#0057ff" pt={21} pl={13}>
          <Typography variant="h2">The Final Product</Typography>
          <img src="/groww/final.png" style={{ width: "100%" }} />
        </Box>
      </div>
    );
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <p>
        This content is password protected. To view it please enter your
        password below:
      </p>
      <Box display="flex" alignItems="center">
        <span style={{ paddingRight: 5 }}>Password:</span>
        <TextField
          style={{ paddingRight: 10 }}
          type="password"
          variant="outlined"
          inputRef={inputRef}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Grow;
