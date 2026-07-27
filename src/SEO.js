import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url }) {
    const siteName = "Sarte Solutions";
    const fullTitle = `${title} | ${siteName}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`https://www.sarte.com${url}`} />
            
            {/* You can add a default share image here later */}
            {/* <meta property="og:image" content="https://www.sarte.com/share-image.jpg" /> */}
        </Helmet>
    );
}