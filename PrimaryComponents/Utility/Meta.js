import Head from 'next/head';
const Meta = ({ title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
    </>
  );
};
Meta.defaultProps = {
  title: 'Uparzon e-commerce site',
  description: 'This is Uparzon e-commerce site',
  keywords: 'uparzon,nextjs,react js,ecommerce,marketplace',
};

export default Meta;