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

  if (value === "tnbkjprggn1102hp")
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
            To efficiently manage medication administration, including
            organizing medicines with their respective expiry dates,
            instructions, and different bottles, while also maintaining a proper
            schedule.
          </Typography>

          <Typography variant="body1" className=" pt-66">
            At an Old Age home, numerous aspects require organization, such as
            daily care for residents, caregiver planning, shift scheduling, and
            overall wellness. Among these, medication plays a crucial role.
            While it may seem straightforward to administer medication to each
            patient at the designated time, there are inherent complexities
            involved. To address and resolve these complexities, the E-Mar
            module has been developed specifically to tackle medication-related
            challenges. The module ensures that self-administered medication is
            appropriately managed, maintaining the integrity of the medication
            and ensuring the safety of all residents residing within the
            facility.
          </Typography>
        </Box>
        <div className={`case-study-container`}>
          <Box pb={25}>
            <Typography variant="h2" className="pb-24" color="textPrimary">
              My Role
            </Typography>
            <Typography variant="body1" className="pb-32">
              As the sole designer on the project, I took on the responsibility
              of managing the end-to-end process, from conducting research to
              final delivery. Recognizing the importance of creating a
              user-friendly and comprehensible solution for the client, I
              conducted thorough research to inform my design approach.
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
                    src="/medication/ca2.png"
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
              <Typography variant="subtitle1" color="textPrimary">
                Some important point to be noted
              </Typography>

              <Box className="pb-24 pt-20" component={"ol"}>
                <Typography component={"li"} variant="body1" className="pb-12">
                  Implement a scheduling system for PRN (as-needed) medications
                  to ensure that they are administered as required, just like
                  routine medications.
                </Typography>
                <Typography component={"li"} variant="body1" className="pb-12">
                  Record PRN medications in the inventory, associating each
                  patient with a specific set of PRN medications stored in the
                  database.
                </Typography>
                <Typography component={"li"} variant="body1" className="pb-12">
                  Ensure that even if multiple patients are prescribed the same
                  medication, each patient receives their medicine from an
                  individually assigned bottle to maintain medication
                  traceability and prevent errors.
                </Typography>
                <Typography component={"li"} variant="body1" className="pb-12">
                  Capture separate bottle information in a way that reflects the
                  same medication, allowing for unique identification of each
                  bottle.
                </Typography>
                <Typography component={"li"} variant="body1" className="pb-12">
                  Account for instances where medications are broken, missed, or
                  discarded, as this may affect the count, and record such
                  occurrences accordingly.
                </Typography>
                <Typography component={"li"} variant="body1" className="pb-12">
                  Assign unique IDs to medication bottles to facilitate tracking
                  and management, especially since the order in which bottles
                  are opened may be unpredictable due to varying patient needs.
                </Typography>
              </Box>
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
              I have not included the Med pass report in this description
              because I've observed that the pass/fail status is not specific to
              individual patients. Therefore, it would be beneficial to arrange
              the information in a way that allows the facility admin to view
              the status of all patients on a single screen. Additionally, there
              are other reports, such as the Nutrition report and Vital Report,
              that she frequently needs to access. To address this, I will
              develop a new module dedicated to reports, where she can
              conveniently view all the reports in one centralized location.
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
