import Head from "next/head";
import { Main } from "../components/containers";
import { D1, B, P1, P2 } from "../components/typography";
import { HeroContainer } from "../components/hero";
import ProjectCard, { IProject } from "../components/projectCard";
import { data } from "../data";
import { GetStaticProps } from "next";

interface IData {
  data: IProject[];
}

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
            Make your vision <br />
            real, for real.
          </D1>

          <P1>
            Realfr brings visions of a better tomorrow to reality through
            Product Design, Software Development and Token Engineering.
          </P1>
        </HeroContainer>
        {!data?.length && <P2>No projects to show</P2>}
        {data.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Main>
    </>
  );
}
