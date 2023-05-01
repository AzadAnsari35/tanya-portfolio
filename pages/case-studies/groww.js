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

  if (value === "tnbkjprggn1102hp")
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
            To connect with a mentor who shares similar interests and goals,
            providing personalized and customized guidance to achieve individual
            aspirations.
          </Typography>

          <Typography variant="body1" className=" pt-66 pb-66">
            Many individuals often encounter difficulties in skill development,
            struggling to understand the direction they should pursue.
            Consequently, they waste valuable time searching for the best
            courses, materials, and learning resources available in the market.
            The constant search for the right path leads to confusion, resulting
            in frequent changes and a sense of aimlessness.
          </Typography>
          <Typography variant="body1">
            By having a personalized mentor tailored to their learning needs,
            individuals can receive guidance from someone who has gone through
            similar experiences. This mentor can provide valuable insights and
            help the mentee navigate their current challenges. Having a mentor
            who understands their unique circumstances can bring clarity and
            confidence, as the mentee knows they are working with the right
            person to progress on a customized learning path specifically
            designed for their growth.
          </Typography>
        </Box>
        <div className={`case-study-container`}>
          <Box pb={40}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              My Role
            </Typography>
            <Typography variant="body1" className="pb-32">
              As the Product Designer, my primary responsibility was to develop
              the experience strategy and design for the iOS/Android app.
            </Typography>
            <Typography variant="body1" className="pb-32">
              Working as a sole contributor on this project, I took charge of
              end-to-end communication with both the development and product
              teams. This involved coordinating and aligning with the different
              stakeholders throughout the design process.
            </Typography>
            <Typography variant="body1" className="pb-32">
              To ensure a user-centered approach, I conducted extensive user
              research, gathering valuable insights from approximately 50-100
              individuals. I then synthesized and consolidated the data into a
              comprehensive product requirement document. This document served
              as a blueprint for guiding the design and development of the app,
              ensuring that it addressed the needs and preferences of the target
              user base.
            </Typography>
          </Box>

          <Box pb={40}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              The Solution
            </Typography>
            <Typography variant="body1" className="pb-32">
              The proposed solution is to develop an application using the
              Mentor-Mentee Model. In this application, the Mentee will input
              their goals, and based on these goals, they will be presented with
              a curated list of available mentors. The Mentee can then choose
              the mentor that aligns best with their aspirations and begin their
              personalized learning journey.
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
                I conducted a research study with 70 individuals, consisting of
                professionals seeking employment, individuals seeking
                internships, and final year college students.
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
                1. What is your current goal that you are working towards?{" "}
                <br />
                2. Are you confident about this goal?
                <br /> 3. How important is this goal for your career?
                <br /> 4. What specific steps are you taking to achieve this
                goal?
                <br /> 5. Are these steps guiding you in the right direction?
                <br /> 6. Imagine having a mentor who can provide you with
                feedback and guidance at every step of your journey. Would you
                be interested in learning in this way?
                <br /> 7. If yes, on a scale of 1-10, how interested are you in
                having a mentorship like this?
                <br /> 8. How much time can you allocate per day/week for this
                kind of mentorship?
                <br /> 9. If mentorship like this were available, would you be
                willing to pay for it?
                <br /> 10. If so, how much would you be able to afford per month
                for this type of mentorship app?
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
              To test the initial requirements, we created a simple flow without
              any design criteria. The purpose was to gain insights into
              potential challenges and conduct a pilot run with approximately
              100 users. The flow we implemented was as follows:
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
                After developing the initial basic product, we conducted a pilot
                run with a specific group of users. Based on this pilot run, I
                successfully addressed the following challenges:
              </Typography>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                1. Finding the correct match
              </Typography>
              <Box display="flex" className="challenges">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  Finding the right match is crucial to achieving goals and
                  ensuring alignment between mentors and mentees. Previously,
                  manually or randomly matching mentors and mentees posed a
                  challenge. In many cases, mentees and mentors would lose
                  interest and trust in the process after the first or second
                  session due to a lack of compatibility. To overcome this, our
                  team developed an algorithm that considers the users'
                  interests and skills to find the perfect match. We also
                  incorporated the importance of experience in the matching
                  process. Through research and analysis, I formulated an
                  algorithm that calculates a match percentage and presents it
                  to the mentee, increasing the likelihood of finding a suitable
                  mentor.
                </Typography>
                <img src="/groww/1.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                2.After Match, Communication and Ice breaking
              </Typography>
              <Box display="flex" alignItems="end" className="challenges">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  One challenge I faced was the communication gap between the
                  mentor and mentee. Sometimes, mentors would not initiate
                  communication because they feel that they are in a superior
                  position, while mentees struggle to find the correct way to
                  start the conversation. After much investigation, we realized
                  that this was a significant issue, as a meaningful
                  relationship between mentor and mentee is crucial to success.
                  To address this, we developed a series of ice-breaking formats
                  that mentees could use to initiate conversations and build
                  stronger relationships with their mentors. This approach has
                  helped mentees feel more comfortable sharing their problems
                  with their mentors, while mentors are better able to
                  understand their mentees' situations and provide tailored
                  guidance.
                </Typography>
                <img style={{ objectFit: "contain" }} src="/groww/2.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                3. Time Syncing for meetings
              </Typography>
              <Box display="flex" className="challenges">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  Another challenge that emerged during the mentoring journey
                  was synchronizing the available time for both mentors and
                  mentees. Often, mentors would schedule a meeting, but the
                  mentee would not show up, and vice versa. To address this
                  issue, we sought to understand the reasons behind these missed
                  meetings. Through discussions with mentors and mentees, we
                  discovered that they needed calendar integration and a
                  confirmation from the other party to ensure they would join
                  the call. To resolve this challenge, we implemented a system
                  that integrates with their calendars and requires confirmation
                  from both parties before a meeting is considered confirmed.
                  This way, mentors and mentees can be certain that the other
                  person has confirmed their availability before attending the
                  scheduled meeting.
                </Typography>
                <img src="/groww/3.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                4. Measuring the progess
              </Typography>
              <Box display="flex" className="challenges">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  Progress is an integral part of achieving goals, and it is
                  essential for mentees to measure their progress to remain
                  disciplined and determined in their pursuits. However, working
                  professionals often give up on their goals due to the time
                  commitment required. To keep them motivated and on track, it
                  was crucial to provide them with real-time progress updates.
                  After extensive research and discussions, we divided goals
                  into tasks and further into skills, and provided the mentees
                  with a graph of their progress based on their performance in
                  each task. There were several discussions on the rating
                  system, whether it should be star-based or points-based out of
                  10. Based on our understanding, we found that mentees were
                  more interested in increasing their star rating than their
                  number grade. Therefore, we designed the system to be star
                  rating-based.
                </Typography>
                <img src="/groww/4.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                5. Managing the notes
              </Typography>
              <Box display="flex" className="challenges">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  The challenge that arose next was the need to add and manage
                  notes effectively. It was important to have a system in place
                  that would organize the notes in a user-friendly manner,
                  making it easy for both the mentee and mentor to access them
                  when needed. We also discovered that many notes were taken
                  from chat conversations, which required users to manually copy
                  and paste the messages into their notes. To address this
                  challenge, we introduced a new feature that allows users to
                  add messages to their notes with a simple double-tap. This
                  feature simplifies the process of arranging and adding notes,
                  providing users with a convenient way to capture important
                  information from their conversations.
                </Typography>
                <img src="/groww/5.png" />
              </Box>
            </Box>

            <Box pb={25}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                6. Engagement of both mentee and mentor
              </Typography>
              <Box display="flex" className="challenges">
                <Typography
                  variant="body2"
                  className="pb-24"
                  color="textPrimary"
                  style={{ paddingRight: 25 }}
                >
                  Engagement is critical in a two-way process like mentoring.
                  Losing interest from even one person's side can result in a
                  loss for both parties. Hence, I wanted to implement techniques
                  to keep the users motivated and interested in using the
                  application. To achieve this, I researched the book "Hooked"
                  and found some rules to turn this into a habit for the users.
                  Here are a few techniques I found to engage the users
                  effectively - 1) Rewards for mentee. 2) Recognition for mentor
                  in the profile.
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
    <Box display="flex" flexDirection="column" alignItems="center" px={5}>
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
