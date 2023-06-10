import EnergyEficy from "../components/EnergyEficy/EnergyEficy";
import HeadComponent from "../components/HeadComponent/HeadComponent";

const EnergyEficyPage = () => {
  const headerProps = {
    title: "Eficiencia Energética",
    keywords: `Asesoría energética, Consultoría energética, Optimización energética, 
    Asesoramiento eléctrico, Renovables, energías Renovables, eficiencia energéticas`,
    content: `Fiva es una consultoría experta en estudios de eficiencia energética ofrecemos 
    a nuestros clientes los mejores estudios dw eficiencia y estudios ambientales de manera totalmente gratuita, 
    solo cobramos si nuestro cliente ahorra`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <EnergyEficy />
  </div>;
};

export default EnergyEficyPage;
