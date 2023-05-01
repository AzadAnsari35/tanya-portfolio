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

      <div style={{ padding: "120px 0px 150px" }}>
        <Typography className="text-align-center" variant="h1">
          Turning Complexities
          <br /> into{" "}
          <span className="color-bright-turquoise"> Simplicity</span>
        </Typography>
      </div>
      <About />
      <Work />
      <Writing />
      <Social />
    </div>
  );
}
