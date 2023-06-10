import HeadComponent from "../components/HeadComponent/HeadComponent";
import SoftwareSolutions from "../components/SoftwareSolutions/SoftwareSolutions";

const SoftwareSolutionsPage = () => {
  const headerProps = {
    title: "Soluciones de Software",
    keywords: `Asesoría energética, Consultoría energética, Optimización energética, 
    Asesoramiento eléctrico, Renovables, energías Renovables, eficiencia energéticas,
    consultoría de software, asesoramiento de software, Software a medida, Servicios de software, desarrollo de software,
    programación, servicios de desarrollo, software para empresas, desarrollo de Saas, desarrollo de crm, 
    software de ventas, software a medida, software empresarial, Saas, crm.`,
    content: `Fiva es una consultoría especializa en software y desarrollo de software, desarrollamos proyectos de software a medida para nuestros clientes,
    estamos especializados en desarrollo b2b haciendo las mejores soluciones para empresas como CRMs, y servicios Saas`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <SoftwareSolutions />
  </div>;
};

export default SoftwareSolutionsPage;
