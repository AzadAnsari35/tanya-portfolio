import Head from "next/head";
import Typography from "@material-ui/core/Typography";
import { Work, Writing, About, Social, Footer } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Typography className="text-align-center" variant="h1">
        Turning Complexities
        <br /> into <span className="color-bright-turquoise"> Simplicity</span>
      </Typography>
      <Work />
      <Writing />
      <About />
      <Social />
      <Footer />
    </div>
  );
}
