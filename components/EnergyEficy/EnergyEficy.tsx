import styles from './EnergyEficy.module.css';
import Styles from '../../styles/Home.module.css';
import { Container, Row, Col } from "react-bootstrap";
import ContactModal from '../ContactModal/ContactModal';

const EnergyEficy = () => {

    return (
        <>
            <Container className={styles.EnergyEficySect1} fluid>
                <Row>
                    <Col className={Styles.ServicepymeTitle} xs={{ span: 12 }} md={{ span: 12 }} >
                        <h1>Estudio De Eficiencia Energética</h1>
                    </Col>
                </Row>
            </Container>

            <Container className={Styles.ServicepymeSect2} fluid>
                <Row>
                    <Col className={Styles.ServicepymeSect2Title} xs={{ span: 12 }} md={{ span: 12 }}>
                        <h2>
                            Servicio de Estudio De Eficiencia Energética
                        </h2>
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Desde auditorias energéticas, para saber si aprovecha de la mejor manera la energía en su local,
                            a baterías de condensación, contadores autogestionados e instalaciones de LEDs.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Damos un soporte integral para que gaste la menor cantidad de energía posible para realizar la misma cantidad de trabajo.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Solicite que un técnico se ponga en contacto para tener mas información.
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

export default EnergyEficy;