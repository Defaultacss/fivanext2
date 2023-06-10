import Head from 'next/head';
import { HeaderProps } from '../../interfaces/props.interface';

const HeadComponent = ({ title, keywords, content }: HeaderProps) => {
    return <Head>
        <title>{title}</title>
        <link rel="icon" href="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1659636717/pictures_m2b68c.jpg" />
        <meta name="google-site-verification" content="f4fH2k3OqfSFIhjb8aZ5FSQk1E8nkUcVZtKVdMptMeM" />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={content} />
        <meta name="author" content="Fiva software" />
    </Head>;
};

export default HeadComponent;