import styles from './ServiceBigConsumer.module.css';
import Styles from '../../styles/Home.module.css';
import { Container, Row, Col } from "react-bootstrap";
import ContactModal from '../ContactModal/ContactModal';

const ServiceBigConsumer = () => {

    return (
        <>
            <Container className={styles.ServicebigSect1} fluid>
                <Row>
                    <Col className={Styles.ServicepymeTitle} xs={{ span: 12 }} md={{ span: 12 }} >
                        <h1>Grandes Consumidores</h1>
                    </Col>
                </Row>
            </Container>

            <Container className={Styles.ServicepymeSect2} fluid>
                <Row>
                    <Col className={Styles.ServicepymeSect2Title} xs={{ span: 12 }} md={{ span: 12 }}>
                        <h2>
                            Servicios Para Grandes Consumidores
                        </h2>
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>

                            Nuestras soluciones para grandes cuentas abarcan desde el estudio individualizado de cada uno de
                            los puntos de suministro hasta ofertas globales en precio fijo por el conjunto total
                            de facturación, ofertas indexadas al mercado diario, indexados trimestrales y compras a
                            prepago.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Obtenemos precios personalizados y unificamos suministros para
                            una facturación mas cómoda y unos precios reducidos por todo el conjunto.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Emitimos resúmenes trimestrales de la facturación de los clientes y
                            realizamos un seguimiento de los objetivos propuestos de ahorro.
                        </p>
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Obtenga una oferta global por el volumen de energía consumido y un análisis de
                            gasto de todas sus instalaciones.
                        </p>
                    </Col>
                </Row>

            </Container>

            <Container className={Styles.ServicepymeSect3} fluid>
                <Row>
                    <Col className={Styles.contactImg} lg={{ span: 6 }} md={{ span: 12 }}></Col>

                    <Col className={Styles.contactserviceTitle} lg={{ span: 6 }} md={{ span: 12 }}
                        style={{ padding: "0px 60px" }}>
                        <h1>Contacta con Nosotros</h1>
                        <ContactModal />
                    </Col>
                </Row>
            </Container>
        </>
    );

};

export default ServiceBigConsumer;