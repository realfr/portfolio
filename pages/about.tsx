import { Head } from "next/document";
import Link from "next/link";
import { Container, Main } from "../components/containers";

export default function About() {
  return (
    <Container>
      <Head>
        <title>About Page</title>
      </Head>
      <Main>
        <Link href="/">&larr; Go Back</Link>
      </Main>
    </Container>
  );
}
