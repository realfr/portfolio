import Head from "next/head";

import Link from "next/link";
import { Container, Main } from "../components/containers";
import { D1, NavLink } from "../components/typography";
import { HeroContainer } from "../components/hero";
import { AiOutlineCopy } from "react-icons/ai";
import { Button } from "../components/button";
import { copy } from "../utils";

export default function Home() {
  return (
    <>
      <Head>
        <title>Make it real fr</title>
        <meta
          name="description"
          content="Bringing visions of a better tomorrow to reality."
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Main>
        <HeroContainer>
          <D1>
            You have a great vision. <br /> Make it real, for real.
          </D1>
          <p>
            Realfr brings visions of a better tomorrow to reality through
            product design, software development and token engineering.
          </p>
          <Button type="button" onClick={copy}>
            <AiOutlineCopy />
            Email
          </Button>
        </HeroContainer>
      </Main>
    </>
  );
}
