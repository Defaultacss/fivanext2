import AboutUs from "../components/AboutUs/AboutUs";
import HeadComponent from "../components/HeadComponent/HeadComponent";

const AboutUsPage = () => {
  const headerProps = {
    title: "Sobre fiva",
    keywords: 'Consultoría energética,Asesoría energética, Consultoría IT, Consultoría digital, digitalización, futuro de la energía',
    content: `Fiva nació de la necesidad de juntar energía software y digitalización en una unica consultoría Asesoría `,
  };

  return <div>
    <HeadComponent {...headerProps} />
    <AboutUs />;
  </div>;

};

export default AboutUsPage;
