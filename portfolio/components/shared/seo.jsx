import Head from 'next/head';

const Seo = ({
  title = 'İbrahim Aslanlı – Frontend Developer',
  description = 'Next.js və React ilə hazırlanmış şəxsi portfolio saytı.',
  image = '/og-image.png',
  url = 'https://ibrahimaslanli.dev',
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

   
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />


      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Seo;
