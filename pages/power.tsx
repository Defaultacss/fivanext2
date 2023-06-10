import HeadComponent from "../components/HeadComponent/HeadComponent";
import PowerOptimization from "../components/PowerOptimization/PowerOptimization";

const PowerOptimizationPage = () => {
  const headerProps = {
    title: "Optimización de Potencia",
    keywords: `Asesoría energética, Consultoría energética, Optimización energética, 
    Asesoramiento eléctrico, Renovables, energías Renovables, eficiencia energéticas,
    Optimización de Potencia, ajuste de potencia, optimización potencial, potencia optima`,
    content: `En Fiva disponemos del mejor sistema de ajuste de potencia del mercado, con nuestro
    ajuste de potencia ayuda a grandes y medios consumidores nuestro ajuste de potencia esta diseñado 
    para mejoras la potencia de tarifas 3.0TD, 6.1TD, 6.2TD.
    Mediante un algoritmo matemático de desarrollo propio analizamos las curvas de carga cuarto horaria y 
    simulamos todas las combinaciones de potencia posibles y su facturación anual, obteniendo de esta forma siempre el 
    mejor resultado para el cliente.`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <PowerOptimization />
  </div>;
};

export default PowerOptimizationPage;
