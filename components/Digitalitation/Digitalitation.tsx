import styles from './Digitalitation.module.css';
import Styles from '../../styles/Home.module.css';
import { Container, Row, Col } from "react-bootstrap";
import ContactModal from '../ContactModal/ContactModal';

const Digitalization = () => {
    return (
        <>
            <Container className={styles.DigitalitataionSect1} fluid>
                <Row>
                    <Col className={Styles.ServicepymeTitle} xs={{ span: 12 }} md={{ span: 12 }} >
                        <h1>Digitalización</h1>
                    </Col>
                </Row>
            </Container>

            <Container className={Styles.ServicepymeSect2} fluid>
                <Row>
                    <Col className={Styles.ServicepymeSect2Title} xs={{ span: 12 }} md={{ span: 12 }}>
                        <h2>
                            Servicios De Digitalización
                        </h2>
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Nuestro equipo de desarrollo analiza tus necesidades y te ofrecerá el mejor servicio posible
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Un Diseño de Interfaces adecuado a las necesidades de tu negocio.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Arquitectura de datos y mantenimiento de bases de datos.
                        </p>
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Mantenimiento y despliegue en servidores.
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

export default Digitalization;