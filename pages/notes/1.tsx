import Head from "next/head";
import Link from "next/link";

export default function Notes1() {
  return (
    <>
      <Head>
        <title>Note 1</title>
        <meta name="description" content="Note 1." />
      </Head>
      <h1>Note 1</h1>
      <Link href="/notes">Back</Link>
    </>
  );
}
