import Digitalization from "../components/Digitalitation/Digitalitation";
import HeadComponent from "../components/HeadComponent/HeadComponent";

const DigitalizationPage = () => {
  const headerProps = {
    title: "Digitalización",
    keywords: `Asesoría digital, Consultoría digital, Consultoría de software, Consultoría de IT, Asesoría tech, 
    Asesoramiento eléctrico, Soluciones tecnológicas, soluciones eléctricas y tecnológicas`,
    content: `En Fiva tentemos el mejor servicio de asesoramiento en materia digital a empresas y particulares, 
    nos preocupamos el el cliente y ofrecemos las mejores herramientas tenemos grandes profesionales 
    y ofrecemos las ultimas tecnologías todas nuestro software esta basado en ultimas tecnologías como Python, con Django, Typescript, com frameworks de ReactJs y NextJs`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <Digitalization />
  </div>;
};

export default DigitalizationPage;
