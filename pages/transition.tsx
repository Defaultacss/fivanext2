import EnergyTransition from "../components/EnergyTransition/EnergyTransition";
import HeadComponent from "../components/HeadComponent/HeadComponent";

const EnergyTransitionPage = () => {
  const headerProps = {
    title: "Transición a Energía Renovable",
    keywords: `Asesoría energética, Consultoría energética, Optimización energética, 
    Asesoramiento eléctrico, Renovables, energías Renovables, eficiencia energéticas,
    Transición a Energía Renovable, Transición energética, Energías renovables, Renovables, 
    transición renovable, 
    software de ventas, software a medida, software empresarial, Saas, crm.`,
    content: `La función de Fiva es colaborar con la transición energética, y 
    lo hacemos ayudando a empresas y clientes con sus proyectos renovable,
    en fiva damos soluciones de eficiencia energética y transición energética, 
    y colaboramos con la venta de cargadores de vehículos eléctricos, paneles fotovoltaicos, 
    baterías de condensadores, contadores de telemedida`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <EnergyTransition />
  </div>;
};

export default EnergyTransitionPage;
