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
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
          integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/e0ab26d7f1.js"
          crossOrigin="anonymous"></script>

        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
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
