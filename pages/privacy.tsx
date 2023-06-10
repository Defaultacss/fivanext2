import HeadComponent from "../components/HeadComponent/HeadComponent";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const Privacy = () => {
    const headerProps = {
        title: "Política de privacidad",
        keywords: `Asesoría energética, Consultoría energética, Optimización energética, 
        Asesoramiento eléctrico, Renovables, energías Renovables, eficiencia energéticas,
        consultoría de software, asesoramiento de software, Comparativa de Tarifas, Comparativa de Energética,
        Comparativa de luz, Comparativa de luz y gas, Comparativa de gas`,
        content: `Política de privacidad de Fiva, en Fiva nos preocupa la privacidad de nuestros clientes`,
    };
    return <div>
        <HeadComponent {...headerProps} />
        <PrivacyPolicy />
    </div>;
};

export default Privacy;