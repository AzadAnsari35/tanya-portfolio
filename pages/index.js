import Head from "next/head";
import { Typography, Box } from "@material-ui/core";
import { Work, Writing, About, Social } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Box py={30}>
        <Typography className="text-align-center" variant="h1">
          Turning Complexities
          <br /> into{" "}
          <span className="color-bright-turquoise"> Simplicity</span>
        </Typography>
      </Box>
      <About />
      <Work />
      <Writing />
      <Social />
    </div>
  );
}
