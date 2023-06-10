import HeadComponent from "../components/HeadComponent/HeadComponent";
import ServiceBigConsumer from "../components/ServiceBigConsumer/ServiceBigConsumer";

const BigServicePage = () => {
  const headerProps = {
    title: "Grandes consumidores",
    keywords: `Asesoría energética, Consultoría energética, Grandes consumidores, 
    Asesoramiento eléctrico, Asesoramiento Grandes consumidores, Grandes consumidores luz, 
    Grandes consumidores gas, Grandes consumidores luz y gas`,
    content: `En Fiva asesoramos a Grandes consumidores con los servicios, 
    negociamos los mejores directamente con las comercializadoras, ofrecemos servicios de eficiencia, 
    conseguimos mejore precios de luz gas y energía,
    hacemos ahorras a grandes consumidores con nuestro servicio de ajuste de potencia`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <ServiceBigConsumer />
  </div>;
};

export default BigServicePage;
