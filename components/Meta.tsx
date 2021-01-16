import Head from "next/head";

interface HeadProps {
  title: string;
  description?: string;
}

const Meta: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="title" />
      <meta name="description" content={description ?? "needs description"} />
    </Head>
  );
};

export default Meta;
