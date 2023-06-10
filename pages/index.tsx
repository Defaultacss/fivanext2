import HeadComponent from "../components/HeadComponent/HeadComponent";
import Home from "../components/Home/Home";

const HomePage = () => {
  const headerProps = {
    title: "Fiva Energy & Software",
    keywords: `Asesoría energética, Consultoría energética, Optimización energética, 
    Asesoramiento eléctrico, Renovables, energías Renovables, eficiencia energéticas,
    consultoría de software, asesoramiento de software, digitalización, Ajuste de potencia, optimización de potencia`,
    content: `Fiva es la unica asesoría que integra energía y software para ofrecer las mejores 
    soluciones de software y eficiencia energética, en fiva asesoramos a empresas y particulares en materia de energía y software.`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <Home />
  </div>;
};

export default HomePage;
