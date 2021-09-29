import Head from "next/head";
import Link from "next/link";

import colors from "../data/colors.json";

export default function Home() {
  return (
    <div style={{ marginLeft: "20px", cursor: "pointer" }}>
      <Head>
        <title>Colors!</title>
        <meta name="description" content="App that displays pretty colors" />
      </Head>
      {colors.map((color) => (
        // eslint-disable-next-line @next/next/link-passhref
        <Link key={`${color.name}`} href={`/${color.name}`}>
          <h2>{color.name}</h2>
        </Link>
      ))}
    </div>
  );
}
