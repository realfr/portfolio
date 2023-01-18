import Head from "next/head";
import Link from "next/link";

export default function Notes() {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <Link href="/notes/1">Note 1</Link>
      <Link href="/">Back</Link>
    </>
  );
}
