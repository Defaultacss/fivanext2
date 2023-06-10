import styles from './PowerOptimization.module.css';
import Styles from '../../styles/Home.module.css';
import { Container, Row, Col } from "react-bootstrap";
import ContactModal from '../ContactModal/ContactModal';


const PowerOptimization = () => {
    return (
        <>
            <Container className={styles.PowerOptimitationSect1} fluid>
                <Row>
                    <Col className={Styles.ServicepymeTitle} xs={{ span: 12 }} md={{ span: 12 }} >
                        <h1>Optimización de Potencia</h1>
                    </Col>
                </Row>
            </Container>

            <Container className={Styles.ServicepymeSect2} fluid>
                <Row>
                    <Col className={Styles.ServicepymeSect2Title} xs={{ span: 12 }} md={{ span: 12 }}>
                        <h2>
                            Servicio de Optimización de Potencia
                        </h2>
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Os pedimos autorización para consultar vuestros datos en SIPS
                            (Sistema de Intercambio de Punto de Suministro)
                            y con nuestra aplicación ajustamos la potencia contratada a la demanda real
                            a lo largo del año.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Nuestros algoritmos han sido optimizados para obtener el máximo ahorro posible.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Confiamos tanto en nuestro Software que sólo cobramos si conseguimos ahorrar en
                            su factura.
                        </p>
                    </Col>
                </Row>

            </Container>

            <Container className={Styles.ServicepymeSect3} fluid>
                <Row>
                    <Col className={Styles.contactImg} lg={{ span: 6 }} md={{ span: 12 }}></Col>

                    <Col className={Styles.contactserviceTitle} lg={{ span: 6 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                        <h1>Contacta con Nosotros</h1>
                        <ContactModal />
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default PowerOptimization;

