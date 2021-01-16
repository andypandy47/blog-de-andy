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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
  );
};

export default Meta;
