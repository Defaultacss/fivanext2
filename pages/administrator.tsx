import HeadComponent from "../components/HeadComponent/HeadComponent";
import ServiceAdministrator from "../components/ServiceAdministrator/ServiceAdministrator";

const AdministratorServicePage = () => {
  const headerProps = {
    title: "Administradores de fincas",
    keywords: 'Asesoría energética, Consultoría energética, Administradores de fincas, Asesoramiento eléctrico, Asesoramiento administradores ',
    content: `En Fiva ayudamos a administradores de fincas el asesoramiento de todo el ámbito energético y ofrecemos nuestros 
    servicio de consultoría, gestión de contáramos, estudios de eficiencia, ajustes de potencia tramites con comercializadoras...`,
  };
  return <div>
    <HeadComponent {...headerProps} />
    <ServiceAdministrator />
  </div>;
};

export default AdministratorServicePage;
