import Head from "next/head";

interface HeadProps {
  title: string;
  description?: string;
}

const Meta: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=yes" />
      <meta name="description" content={description ?? "needs description"} />
      <link rel="manifest" href="/manifest.json"></link>
    </Head>
  );
};

export default Meta;
