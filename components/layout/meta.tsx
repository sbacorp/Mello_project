import Head from "next/head";

export default function Meta({
  title = "Mello - твой лучший аналог Trello в России",
  description = "Mello - управляй свои проектом из любой точки мира!!!",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
  );
}
