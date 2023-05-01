import React, { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const defaultTheme = createTheme();

const Payment = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const classes = useStyles();

  function handleSubmit() {
    setValue(inputRef.current.value);
  }

  if (value === "tnbkjprggn1102hp")
    return (
      <div>
        <div className={`container ${classes.title}`}>
          <img
            src="/payment/logo.svg"
            style={{ objectFit: "contain", marginBottom: 70 }}
            width="325"
            height="95"
          />
          <Typography variant="h2">Disputes and Chargebacks</Typography>
        </div>
        <div className={`container`}>
          <Box pb={25} display="flex">
            <Typography
              className={classes.heading}
              variant="h2"
              color="textPrimary"
            >
              Context
            </Typography>
            <Box pl={30}>
              <Typography variant="body1" className="pb-12">
                It was a Monday morning, and as I entered the office cafeteria,
                I grabbed a cup and started pouring hot water into it, preparing
                to mix in some green tea. Suddenly, I heard a voice from behind.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Hey Tanya," Kriti called out to me.
              </Typography>
              <Typography variant="body1" className="pb-12">
                Kriti is the PM of Disputes and Chargebacks at Cashfree
                Payments. She is a remarkably humble and kind person to work
                with, always sporting a smile. Despite the immense pressure that
                comes with her role, she manages to keep a composed demeanor.
              </Typography>
              <Typography variant="body1" className="pb-12">
                Typically, I work on settlements at Cashfree (in case you're not
                familiar, settlements is another product at Cashfree, and I was
                responsible for its design). So, it's worth noting that I
                haven't worked on disputes before or collaborated with Kriti
                closely. We've only crossed paths at a few office parties.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Oh, hi Kriti! How's it going?" I greeted her.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Tanya, things aren't going well, to be honest. I need your
                help," she replied.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "What happened?" I inquired.
              </Typography>
              <Typography variant="body1" className="pb-32">
                We're in dire need of design assistance for disputes and
                chargebacks. Our user experience is falling behind, and both our
                internal team and merchants have been putting in a lot of manual
                effort to resolve these disputes.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Don't worry, Kriti. You seem quite stressed, but we'll handle
                the situation," I reassured her.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Tanya, we really can't afford to relax. This project has become
                a top priority. Since you work on settlements, I've asked
                Susheel (the Group PM of settlements and disputes, who is
                Kriti's immediate manager) to allocate half of your bandwidth
                and involve you in the disputes."
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Perfect. Let's connect today, and you can provide me with the
                basic information about disputes and chargebacks, as I'm not
                familiar with the product," I suggested.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Sure, I've already scheduled a call with you at 3 in the
                afternoon. See you then," Kriti confirmed.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Great, I'll see you then," I said, as I headed back to my seat.
              </Typography>
            </Box>
          </Box>

          <Box pb={25} display="flex">
            <Typography variant="h2" color="textPrimary">
              Introduction of the product
            </Typography>
            <Box pl={30}>
              <Typography variant="body1" className="pb-12">
                At 2:50 in the afternoon, while engrossed in an important design
                task, my laptop buzzed with a calendar reminder. Ah, that's
                right—I had to meet Kriti.
              </Typography>
              <Typography variant="body1" className="pb-12">
                I walked over to Kriti's desk, where she was engaged in a call
                with a merchant.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "I sincerely apologize for the inconvenience caused to you,"
                Kriti expressed over the phone.
              </Typography>
              <Typography variant="body1" className="pb-12">
                There was a momentary pause as she attentively listened to the
                other person.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Absolutely, sir. I will make every effort to resolve this as
                quickly as possible. Thank you for your understanding, sir,"
                Kriti responded before ending the call.
              </Typography>
              <Typography variant="body1" className="pb-12">
                She seemed deeply concerned, so I asked, "What happened, Kriti?"
              </Typography>
              <Typography variant="body1" className="pb-12">
                She replied, "A merchant has been complaining that despite
                having already uploaded the necessary documents for a dispute
                raised against them, our system shows their status as 'Dispute
                Lost because no documents uploaded.' The merchant was furious,
                and we've been receiving such queries almost every day lately,
                Tanya. Additionally, we're facing a few other issues."
              </Typography>
              <Typography variant="body1" className="pb-12">
                "I understand. This problem is critical, and we need to
                implement some quick fixes as soon as possible to spare you from
                such situations. For now, just give me an overview of the
                product so that I can grasp the basic process," I suggested.
              </Typography>
              <Typography variant="body1" className="pb-12">
                "Sure, let's begin with a brief definition of disputes, the
                various types of disputes, and the lifecycle of a dispute," she
                replied, opening a document on her laptop—a document she
                intended to use to explain the details to me.
              </Typography>
            </Box>
          </Box>

          <Box pb={25}>
            <Typography variant="h3" className="pb-24" color="textPrimary">
              Screenshots
            </Typography>
            <Grid container spacing={6} display="flex">
              <Grid item xs={4}>
                <img
                  src="/payment/screenshot1.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src="/payment/screenshot2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src="/payment/screenshot3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Box>

          <Box pb={25} display="flex">
            <Typography
              variant="h2"
              className={classes.heading}
              color="textPrimary"
            >
              Product Act
            </Typography>
            <Box pl={30}>
              <Typography variant="body1" className="pb-12">
                After gaining an understanding of what a dispute and a
                chargeback entail, I requested Kriti to engage in an initial
                product role play. In this scenario, I assumed the role of a
                merchant, while she took charge of updating everything using the
                backend tool of the merchant dashboard, called Retool. The
                following are the screenshots capturing the step-by-step
                process:
              </Typography>
            </Box>
          </Box>

          <Box pb={25}>
            <Typography variant="h3" className="pb-24" color="textPrimary">
              Retool Screenshots
            </Typography>
            <Grid container spacing={6} display="flex">
              <Grid item xs={6}>
                <img
                  src="/payment/rscreenshot1.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/rscreenshot2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/rscreenshot3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Box>

          <Box pb={25}>
            <Typography variant="h3" className="pb-24" color="textPrimary">
              Merchant Dashboard Screenshots
            </Typography>
            <Grid container spacing={6} display="flex">
              <Grid item xs={6}>
                <img
                  src="/payment/mdscreenshot1.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/mdscreenshot1.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Box>

          <Box pb={25}>
            <Typography variant="h3" className="pb-24" color="textPrimary">
              Takeaways from the above exercise
            </Typography>
            <Grid container spacing={6} display="flex">
              <Grid item xs={4}>
                <img
                  src="/payment/takeaway1.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src="/payment/takeaway2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src="/payment/takeaway3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Box>

          <Box pb={10} display="flex">
            <Typography
              variant="h2"
              className={classes.heading}
              color="textPrimary"
            >
              Connecting with the Legal team
            </Typography>
            <Box pl={30}>
              <Typography variant="body1" className="pb-12">
                After that I really wanted to know the merchant pain points,
                process points etc. So I reached out to the risk and compliance
                team about what issues they face generally and with what is the
                current process to be followed and how does a chargeback comes
                to them generally.
              </Typography>
            </Box>
          </Box>

          <Box pb={25} display="flex">
            <Grid container spacing={6} display="flex">
              <Grid item xs={6}>
                <img
                  src="/payment/legal1.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/legal2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/legal3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/legal4.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Box>

          <Box pb={10} display="flex">
            <Typography
              className={classes.heading}
              variant="h2"
              color="textPrimary"
            >
              Pain Points
            </Typography>
            <Box pl={30} component={"ol"}>
              <Typography component={"li"} variant="body1" className="pb-12">
                Ensure clear visibility of the target date for the user to track
                resolution timelines effectively.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Display the transaction ID prominently for easy reference and
                tracking.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Highlight new disputes distinctly to draw attention to recently
                raised issues.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Use visual cues or indicators to emphasize important and urgent
                actions that require immediate attention.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Include a separate section for Chargebacks and Disputes,
                showcasing the different phases such as pre-arbitration and
                arbitration, to provide a comprehensive overview to the
                merchant.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Implement a notification system or visual indication to inform
                users about new messages and communication related to disputes.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Add a summary section that provides a breakdown of open, closed,
                and critical disputes requiring immediate action.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Highlight disputed transactions within the payments tab to
                differentiate them from regular transactions.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Provide merchants with the option to accept or contest disputes,
                enabling them to take appropriate actions based on their
                assessment.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Ensure that multiple disputes linked to the same transaction are
                clearly visible, allowing merchants to manage them efficiently.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Include a dispute detail section that provides comprehensive
                information, including the reason for the dispute, required
                documents, and relevant line of business, to facilitate
                streamlined resolution processes.
              </Typography>
            </Box>
          </Box>

          <Box pb={25}>
            <Grid container spacing={6} display="flex">
              <Grid item xs={6}>
                <img
                  src="/payment/pain1.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/pain2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/pain3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Box>

          <Box pb={10} display="flex">
            <Typography
              className={classes.heading}
              variant="h2"
              color="textPrimary"
            >
              Ideating with different possibilities- Brainstorming Phase
            </Typography>
          </Box>
          <Box pb={25}>
            <Grid container spacing={6} display="flex">
              <Grid item xs={6}>
                <img
                  src="/payment/ideating1.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating4.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating5.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating6.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Box>

          <Box pb={25}>
            <Typography
              className="pb-40"
              variant="h2"
              color="textPrimary"
              pb={10}
            >
              User Flow
            </Typography>
            <img
              src="/payment/userflow.png"
              style={{ objectFit: "fill" }}
              width="100%"
              height="100%"
            />
          </Box>

          <Box pb={25}>
            <Typography
              className="pb-40"
              variant="h2"
              color="textPrimary"
              pb={10}
            >
              The Final Solution
            </Typography>
            <Grid container spacing={6} display="flex">
              <Grid item xs={6}>
                <img
                  src="/payment/final1.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final4.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final5.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final6.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final7.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final8.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final9.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final10.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Box>
        </div>
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

const useStyles = makeStyles(() => {
  const onMobile = defaultTheme.breakpoints.only("xs");

  return createStyles({
    title: {
      padding: "100px 0px",
      color: "white",
      backgroundColor: "#6930CA",
      marginBottom: 40,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    heading: {
      minWidth: 300,
    },
    links: {
      display: "flex",
      "& > a": {
        padding: "0px 20px",
      },
      [onMobile]: {
        flexDirection: "column",
        "& > a": {
          padding: "x 0px",
        },
      },
    },
    icons: {
      display: "flex",
      "& > a": {
        padding: "0px x",
      },
      [onMobile]: {
        paddingTop: 20,
        "& > a": {
          padding: "0px 10px 0px 0px",
        },
      },
    },
  });
});

export default Payment;
