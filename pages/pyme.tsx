import HeadComponent from "../components/HeadComponent/HeadComponent";
import ServicePyme from "../components/ServicePyme/ServicePyme";

const PymePage = () => {
  const headerProps = {
    title: "Pequeñas y Medianas Empresas",
    keywords: `Asesoría energética, Consultoría energética, Optimización energética, 
    Asesoramiento eléctrico, Renovables, energías Renovables, eficiencia energéticas,
    consultoría de software, asesoramiento de software, Comparativa de Tarifas, Comparativa de Energética,
    Comparativa de luz, Comparativa de luz y gas, Comparativa de gas, Pequeñas y Medianas Empresas, Pyme, Pymes, 
    Asesoría energética a Pymes, Consultoría energética a Pymes, Asesoría energética a Pequeñas y Medianas Empresas, 
    Consultoría energética a Pequeñas y Medianas Empresas`,
    content: `Fiva ayuda a las Pymes a cumplir sus objetivos, Somos especialistas en Asesoramiento a pymes, ofrecemos 
    nuestros servicios de asesoramiento y consultoría de manera gratuita, asesoramos en materia como la energía y el 
    software para ayudar a nuestras pymes a competir con las grandes empresas.`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <ServicePyme />
  </div>;
};

export default PymePage;
