import HeadComponent from "../components/HeadComponent/HeadComponent";
import PriceRate from "../components/PriceRate/PriceRate";

const PriceRatePage = () => {
  const headerProps = {
    title: "Comparativa de Tarifas",
    keywords: `Asesoría energética, Consultoría energética, Optimización energética, 
    Asesoramiento eléctrico, Renovables, energías Renovables, eficiencia energéticas,
    consultoría de software, asesoramiento de software, Comparativa de Tarifas, Comparativa de Energética,
    Comparativa de luz, Comparativa de luz y gas, Comparativa de gas`,
    content: `En Fiva somos expertos en Comparativa de tarifas de luz y gas, ofrecemos a nuestros clientes 
    las mejores tarifas del mercado, comparamos tarifas con las mayores comercializadoras del país,
    en Fiva hacemos un estudio de eficiencia energética totalmente gratuito a todos nuestros clientes para ofrecer la mejor opción`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <PriceRate />
  </div>;
};

export default PriceRatePage;
