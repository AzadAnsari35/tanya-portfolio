import React, { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";

const Medication = () => {
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
          bgcolor="#FF7813"
          mb={40}
          className={`case-study-container`}
        >
          <Typography variant="h2" className="pb-24">
            The Problem
          </Typography>
          <Typography variant="body1">
            To arrange and organize all the medicine with the expiry date,
            instructions, different bottles and maintain a schedule out of it.
          </Typography>

          <Typography variant="body1" className=" pt-66">
            At an Old age home, a lot of things needs to be organized like the
            daily care of the residents, the caregiver's plan, their shifts,
            their wellness and etc. Medication is a big part of this whole flow.
            As much as it seems eeasy to give medicine to every patient at the
            scheduled time, The complexities are there in it and to resolve all
            these complexities ,This module of E- Mar is all about solving the
            problem around the medications. The facility will ensure
            self-administered medication is managed appropriately to ensure the
            integrity of the medication and safety of all residents residing in
            the facility.
          </Typography>
        </Box>
        <div className={`case-study-container`}>
          <Box pb={25}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              My Role
            </Typography>
            <Typography variant="body1" className="pb-32">
              I, being the only designer in the project, was handling end to end
              process from research to delivery. I conducted some research
              around the project and came with solution to make it easy and
              understandable for the client.
            </Typography>
          </Box>

          <Box>
            <Box pb={10}>
              <Typography variant="h2" color="textPrimary">
                Research
              </Typography>
            </Box>

            <Box pb={15}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                User Persona
              </Typography>
              <img
                src="/medication/userPersona.png"
                style={{ objectFit: "contain" }}
                width="100%"
                height="100%"
              />
            </Box>

            <Box pb={15}>
              <Typography variant="h3" className="pb-20" color="textPrimary">
                Manual Process
              </Typography>

              <Typography variant="h5" color="textPrimary">
                Documentation of Manual Process step by step
              </Typography>

              <img
                src="/medication/documentation.svg"
                style={{ objectFit: "contain", paddingTop: 10 }}
                width="100%"
                height="100%"
              />
            </Box>

            <Box pb={15}>
              <Typography variant="h5" className="pb-12" color="textPrimary">
                LIC 622,CA ( Centrally Stored Medication Record)
              </Typography>
              <img
                src="/medication/lic.png"
                style={{ objectFit: "contain" }}
                width="100%"
                height="100%"
              />
            </Box>

            <Box pb={15}>
              <Typography variant="h5" className="pb-20" color="textPrimary">
                MAR
              </Typography>
              <Grid container>
                <img
                  src="/medication/mar1.png"
                  style={{ objectFit: "contain", paddingBottom: 40 }}
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid container>
                <img
                  src="/medication/mar2.png"
                  style={{ objectFit: "contain" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Box>

            <Box pb={15}>
              <Typography variant="h5" className="pb-24" color="textPrimary">
                Medicine Basket
              </Typography>
              <Grid container>
                <img
                  src="/medication/basket.png"
                  style={{ objectFit: "contain" }}
                />
              </Grid>
            </Box>

            <Box pb={20}>
              <Typography variant="h5" className="pb-24" color="textPrimary">
                Med Pass/ Fail Record
              </Typography>
              <img
                src="/medication/medPass.png"
                style={{ objectFit: "contain" }}
                width="100%"
                height="100%"
              />
            </Box>
          </Box>

          <Box pb={10}>
            <Box pb={15}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                Pain Points
              </Typography>
              <Box pb={10} display="flex">
                <Typography variant="body1" color="textPrimary">
                  1. Maintaining too many Excel. <br />
                  2. Information is not stored at a single place. <br />
                  3. Expired Medicines need to be taken care properly. <br />
                  4. To check the pass and fail list of meds, the admin has to
                  open an excel which is sometimes not filled by caregiver given
                  the loss of record and history. <br />
                  5. Less Secure <br />
                  6. Manual work requires a lot of effort, both mentally and
                  physically. <br />
                  7. Data is not secure in manual recordings.
                </Typography>
              </Box>
            </Box>
            <Box pb={20}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                Competetive Analysis
              </Typography>
              <Typography variant="caption" color="textPrimary">
                Screenshots of some already identified products in the market.{" "}
              </Typography>
              <img
                src="/medication/ca1.png"
                style={{
                  objectFit: "contain",
                  paddingTop: 20,
                  paddingBottom: 40,
                }}
                width="50%"
                height="50%"
              />

              <Grid container spacing={6} display="flex">
                <Grid item xs={6}>
                  <img
                    src="/medication/ca3.png"
                    style={{ objectFit: "fill" }}
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid item xs={6}>
                  <img
                    src="/medication/ca3.png"
                    style={{ objectFit: "fill" }}
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid item xs={6}>
                  <img
                    src="/medication/ca4.png"
                    style={{ objectFit: "fill" }}
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid item xs={6}>
                  <img
                    src="/medication/ca5.png"
                    style={{ objectFit: "fill" }}
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid item xs={6}>
                  <img
                    src="/medication/ca6.png"
                    style={{ objectFit: "fill" }}
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid item xs={6}>
                  <img
                    src="/medication/ca7.png"
                    style={{ objectFit: "fill" }}
                    width="100%"
                    height="100%"
                  />
                </Grid>
              </Grid>
            </Box>

            <Box pb={15}>
              <Typography variant="h3" className="pb-24" color="textPrimary">
                Observations
              </Typography>
              <Typography
                variant="caption"
                className="mb-12"
                color="textPrimary"
              >
                Medicine pictures with Informations
              </Typography>

              <Grid
                container
                style={{ paddingBottom: 40, paddingTop: 20 }}
                spacing={6}
                display="flex"
              >
                <Grid item xs={4}>
                  <img
                    src="/medication/ob1.png"
                    style={{ objectFit: "fill" }}
                    width="100%"
                    height="100%"
                  />
                </Grid>

                <Grid item xs={8}>
                  <Grid container spacing={6} display="flex">
                    <Grid item xs={6}>
                      <img
                        src="/medication/ob2.png"
                        style={{ objectFit: "fill" }}
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <img
                        src="/medication/ob3.png"
                        style={{ objectFit: "fill" }}
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <img
                        src="/medication/ob4.png"
                        style={{ objectFit: "fill" }}
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <img
                        src="/medication/ob5.png"
                        style={{ objectFit: "fill" }}
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Typography variant="caption" color="textPrimary">
                Some important point to be noted
              </Typography>
              <Typography
                variant="body1"
                className="pb-24 pt-20"
                color="textPrimary"
              >
                1. Schedule is maintained for the Routine Meds, but there is no
                schedule for PRN meds. <br />
                2. PRN Meds are recorded in the inventory so, every patient has
                some fixed set of PRNs in the database. <br />
                3. Even if the patient is getting the same medicine but now two
                patients are given medicine from the same bottle. Every Patient
                needs to take medicine from the individual bottles assigned to
                them. <br />
                4. The Separate bottle information needs to be captured
                separately but in a way that they represent the same medicine.{" "}
                <br />
                5. Sometimes Medicine is broken, missed, or thrown so the count
                may vary and needs to be recorded. <br />
                6. Since It is not known which bottle will be opened next so, It
                was important to assign some unique Id to the bottle as there is
                no unique id as of now.
                <br />
              </Typography>
            </Box>
          </Box>

          <Box pb={25}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              The Solution
            </Typography>
            <Typography variant="h3" className="pb-24" color="textPrimary">
              Brainstorming
            </Typography>
            <Grid container spacing={6} style={{ paddingBottom: 80 }}>
              <Grid item xs={6}>
                <img src="/medication/sol1.png" width="100%" height="100%" />
              </Grid>
              <Grid item xs={6}>
                <img src="/medication/sol2.png" width="100%" height="100%" />
              </Grid>
            </Grid>
            <Typography variant="h3" color="textPrimary">
              Final Result
            </Typography>
            <img
              src="/medication/fr1.png"
              width="100%"
              height="100%"
              style={{ paddingTop: 40 }}
            />
            <img
              src="/medication/fr2.png"
              width="100%"
              height="100%"
              style={{ paddingTop: 100 }}
            />
            <img
              src="/medication/fr3.png"
              width="100%"
              height="100%"
              style={{ paddingTop: 100 }}
            />
            <img
              src="/medication/fr4.png"
              width="100%"
              height="100%"
              style={{ paddingTop: 100 }}
            />
            <img
              src="/medication/fr5.png"
              width="100%"
              height="100%"
              style={{ paddingTop: 100 }}
            />
            <img
              src="/medication/fr6.png"
              width="100%"
              height="100%"
              style={{ paddingTop: 100 }}
            />
            <img
              src="/medication/fr7.png"
              width="100%"
              height="100%"
              style={{ paddingTop: 100 }}
            />
            <img
              src="/medication/fr8.png"
              width="100%"
              height="100%"
              style={{ paddingTop: 100 }}
            />
            <img
              src="/medication/fr9.png"
              width="100%"
              height="100%"
              style={{ paddingTop: 100 }}
            />
          </Box>

          <Box pb={25}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              Conclusion
            </Typography>

            <Typography variant="body1" className="pb-24" color="textPrimary">
              I have not added the Med pass report over here since I have
              noticed that the Pass, Fail status is irrespective of the patient
              and they need to be arranged in such a fashion that the facility
              admin can check the status of all patients on a single screen.
              Also, there are other reports which she wants to check so many
              times like the Nutrition report, Vital Report so, going ahead I am
              going to create a new module for the report itself where she can
              see all the reports in a single place.
            </Typography>
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

export default Medication;
