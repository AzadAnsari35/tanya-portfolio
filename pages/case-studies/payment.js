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
                It was a Monday morning, I went to the office and entered into
                the cafeteria. I picked a cup and as I was pouring hot water
                into it and mixing green tea into it, I heard a voice from
                behind.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Hey Tanya” Kriti called me.
              </Typography>
              <Typography variant="body1" className="pb-12">
                Kriti is the PM of Disputes and Chargebacks in cashfree
                payments. She is very humble and kind person to work with. You
                will always find her smiling. She is one of the PM in cashfree
                who works with utmost pressure but she never shows it in her
                face.
              </Typography>
              <Typography variant="body1" className="pb-12">
                I am usually working in the settlements ( If you don’t know what
                is settlements, it is just another product in cashfree whose
                design I was handling). So the context is that I have never
                worked in disputes or with Kriti. I have just met her in a few
                office parties.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Oh Hi Kriti, How is it going?.” I said.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Tanya, everything is not really going well. I need your help?”
                She said.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Oh what happened?” I enquired
              </Typography>
              <Typography variant="body1" className="pb-32">
                We need some design help in disputes and chargebacks. We are
                really behind in terms of user experience and a lot of manual
                effort has been made by our internal team as well as our
                merchants to resolve these disputes.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Relax Kriti you seem so worried, we will handle the situation,
                don’t worry.” I said.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Tanya, we really have no time to relax, this project is a high
                priority now, since you are working in settlements I have asked
                Susheel (Group PM of settlements and Disputes, Kriti’s immediate
                manager also) to take half of your bandwidth and involve you in
                the disputes.”
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Perfect, so lets connect today and you provide me the basic
                information of Disputes and chargebacks since I know nothing
                about the product.” I said.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Sure, I have already scheduled a call with you at 3 in the
                afternoon. See you then.” Kriti said.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Perfect, I‘ll see you” I said and I left towards my seat.
              </Typography>
            </Box>
          </Box>

          <Box pb={25} display="flex">
            <Typography variant="h2" color="textPrimary">
              Introduction of the product
            </Typography>
            <Box pl={30}>
              <Typography variant="body1" className="pb-12">
                It was 2:50 in the afternoon, I was working on an important
                design task and I heard a buzz from my laptop. Oh it was the
                calendar reminder. I have to meet Kriti.
              </Typography>
              <Typography variant="body1" className="pb-12">
                I went to Kriti’s desk as she was tallking to a merchant on
                call.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “I am so sorry for the inconvenience caused to you.” Kriti said
                to someone on the phone.
              </Typography>
              <Typography variant="body1" className="pb-12">
                Some pause while she is listening to the other person on the
                phone.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Definitely Sir, I will try to resolve this as soon as possible.
                Thanks for understanding Sir.” Kriti replied and disconnected
                the call.
              </Typography>
              <Typography variant="body1" className="pb-12">
                She was very worried so I asked her, “What happened Kriti?”
              </Typography>
              <Typography variant="body1" className="pb-12">
                She said,” A merchant was complaining that he had already
                uploaded the documents for a dispute raised against him. But
                still from our end we are showing his status as “Dispute Lost
                because no documents uploaded. He was very angry and we are
                getting such queries every single day these days Tanya. There
                are some more issues we are facing along with it.”
              </Typography>
              <Typography variant="body1" className="pb-12">
                Hmm I see, The problem is critical and we need to do some quick
                fixes as soon as possible so you don’t have to face this
                atleast. For now just give me the gist of the product so I can
                understand the basic process first.
              </Typography>
              <Typography variant="body1" className="pb-12">
                “Sure, let's start with the basic definition of disputes, types
                of disputes and the lifecycle of the dispute” she said while she
                opened a document in her laptop. It was the document which she
                needs to explain to me.
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
                After understanding what a dispute and a Chargeback is I asked
                Kriti to do an initial level product role play where I became
                the merchant and she was updating everything from the backend
                tool of the merchant dashboard which is known as Retool. Below
                is the screen shots of the process.
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
                There is no Target date shown to the user
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Transaction ID missing
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                New Disputes should be highlighted
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Important and Urgent actions should be highlighted
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Chargebacks and Disputes category should be shown to the
                merchant along with the pre-arbi and arb phases
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                There is no information & indiaction of the new messages and
                communication
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Summary Addition of Open, Closed, Critial (Action Required
                Disputes)
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Disputes raised transactions are not highlighted in the payments
                tab.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Merchant have no option to accept or contest dispute.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Multiple disputes linked to the same transaction should be shown
                here.
              </Typography>
              <Typography component={"li"} variant="body1" className="pb-12">
                Dispute Detail should be there where the reason of dispute and
                the document required for the relevant dispute and line of
                business should be marked
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
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/pain2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/pain3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
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
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating4.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating5.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/ideating6.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
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
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final2.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final3.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final4.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final5.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final6.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final7.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final8.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final9.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src="/payment/final10.png"
                  style={{ objectFit: "fill" }}
                  width="100%"
                  height="400"
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
      minWidth: 315,
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
