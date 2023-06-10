import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MessageProviderWrapper } from "../context/message.context";
import Navigation from "../components/Navigation/Navigation";
import UserMessage from "../components/UserMessage/UserMessage";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import GoogleScript from "../components/GoogleScript/GoogleScript";
import InitializeGoogleAnalytics from "../GoogleTracking/GoogleTracking";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  const location = useRouter();

  useEffect(() => {
    InitializeGoogleAnalytics();
  }, []);

  if (location.pathname == "/sitemap.xml") {
    const headerProps = {
      title: "Sitemap.xlm",
      keywords: `Asesoría energética, Consultoría energética, Optimización energética, 
      Asesoramiento eléctrico, Renovables, energías Renovables, eficiencia energéticas,
      consultoría de software, asesoramiento de software, Comparativa de Tarifas, Comparativa de Energética,
      Comparativa de luz, Comparativa de luz y gas, Comparativa de gas`,
      content: `Fiva Sitemap.xml`,
    };
    return (
      <div>
        <SSRProvider>
          <NextNProgress />
          <GoogleScript />
          <HeadComponent {...headerProps} />
          <Component {...pageProps} />
        </SSRProvider>
      </div>
    );
  } else {
    return (
      <>
        <SSRProvider>
          <MessageProviderWrapper>
            <NextNProgress />
            <Navigation />
            <UserMessage />
            <GoogleScript />
            <Component {...pageProps} />
            <Footer />
          </MessageProviderWrapper>
        </SSRProvider>
      </>
    );
  }
}

export default MyApp;
