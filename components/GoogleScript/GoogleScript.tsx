import Script from 'next/script';

const GoogleScript = () => {
    return <>
        <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-49KJTY8BW4" />
        <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-49KJTY8BW4');`,
            }}
        /></>;
};
export default GoogleScript;