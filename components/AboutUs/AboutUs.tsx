import styles from './AboutUs.module.css';
import Styles from '../../styles/Home.module.css';
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import ContactModal from "../ContactModal/ContactModal";

const AboutUs = () => {
    return (
        <>
            <Container className={styles.aboutTitle} fluid>
                <Row>
                    <Col className={Styles.ServicepymeTitle} xs={{ span: 12 }} md={{ span: 12 }} >
                        <h1>Conoce el equipo que hay detrás de Fiva</h1>
                    </Col>
                </Row>
            </Container>

            <Container className={Styles.ServicepymeSect2} fluid>
                <Row>
                    <Col
                        className={Styles.ServicepymeSect2Title}
                        xs={{ span: 12 }}
                        md={{ span: 12 }}
                    >
                        <h2>Nuestro trabajo en fiva</h2>
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col className={Styles.circle} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}>
                        <p>
                            Fiva es una asesoría energética que se compone de profesionales especializados en
                            el sector energético y tecnológico. <br /> Para poder ofrecer los mejores servicios y
                            consejos energéticos, Fiva cuenta con profesionales con una amplia experiencia
                            en el sector energético.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col
                        className={Styles.circle}
                        xs={{ span: 12 }}
                        md={{ span: 6, offset: 3 }}
                    />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}>
                        <p>
                            Ofrecemos un servicio de asesoría energética con el que
                            garantizamos la reducción en su factura de luz y/o gas de su administración,
                            compañía, empresa u organización; a la vez que le hacemos la transición a energías
                            100% renovables sin cobrarle ningún coste adicional.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className={Styles.space}>
                    <Col
                        className={Styles.circle}
                        xs={{ span: 12 }}
                        md={{ span: 6, offset: 3 }}
                    />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}>
                        <p>
                            Fiva se caracteriza por unir el sector energético con el
                            tecnológico creando productos y servicios de gran valor como
                            nuestro sistema de optimización de potencia, diseñado para
                            encontrar la potencia que más se ajusta a las necesidades de
                            nuestro cliente; o nuestros sistemas de gestión creados para
                            ahorrar tiempo y dinero a comercializadoras y consultoras.
                        </p>
                    </Col>
                </Row>
            </Container>
            <section id={styles.section3AB}>
                <h2>Qué Servicios Ofrecemos</h2>
                <Container fluid>
                    <Row id={styles.work}>
                        <Col id={styles.s1} lg={{ span: 3 }}>
                            <Card style={{ width: "20rem" }}>
                                <Card.Img
                                    id={styles.im2}
                                    variant="top"
                                    src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656590699/istockphoto-854354958-612x612_ole4ld.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>Ajustes de optimización de potencia</Card.Title>
                                    <Button
                                        href="/power"
                                        className={styles.Buttonsm}
                                        variant="secondary"
                                    >
                                        Ver más
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col id={styles.s1} lg={{ span: 3 }}>
                            <Card style={{ width: "20rem" }}>
                                <Card.Img
                                    id={styles.im2}
                                    variant="top"
                                    src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656590691/ajuste_ysqjla.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>Estudios de eficiencia energética</Card.Title>
                                    <Button
                                        href="/energy"
                                        className={styles.Buttonsm}
                                        variant="secondary"
                                    >
                                        Ver más
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col id={styles.s1} lg={{ span: 3 }}>
                            <Card style={{ width: "20rem" }}>
                                <Card.Img
                                    id={styles.im2}
                                    variant="top"
                                    src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656590702/istockphoto-1128549235-612x612_fk1ftr.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>
                                        Digitalización y soluciones de software
                                    </Card.Title>
                                    <Button
                                        href="/solutions"
                                        className={styles.Buttonsm}
                                        variant="secondary"
                                    >
                                        Ver más
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id={styles.section2AB}>
                <h2>Nuestro Equipo</h2>
                <Container fluid>
                    <Row id={styles.team}>
                        <Col lg={{ span: 6, offset: 1 }} style={{ padding: "0px" }}>
                            <Image
                                id={styles.im}
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                                alt='Equipo de Fiva'
                            />
                        </Col>

                        <Col id={styles.sect3text} lg={{ span: 4 }} style={{ padding: "0px" }}>
                            <h3>Sales Manager</h3>
                            <p>Lorenzo Velasco</p>
                        </Col>
                    </Row>
                    <Row id={styles.team}>
                        <Col id={styles.sect4text} lg={{ span: 4 }} style={{ padding: "0px" }}>
                            <h3>CTO</h3>
                            <p>Eric Francisco Moral</p>
                        </Col>
                        <Col lg={{ span: 6, offset: 1 }} style={{ padding: "0px" }}>
                            <Image
                                id={styles.im}
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                                alt='Equipo de Fiva'
                            />
                        </Col>
                    </Row>
                    <Row id={styles.team}>
                        <Col lg={{ span: 6, offset: 1 }} style={{ padding: "0px" }}>
                            <Image
                                id={styles.im}
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                                alt='Equipo de Fiva'
                            />
                        </Col>

                        <Col id={styles.sect3text} lg={{ span: 4 }} style={{ padding: "0px" }}>
                            <h3>CEO</h3>
                            <p>Pablo Andreu</p>
                        </Col>
                    </Row>
                </Container>
            </section>

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

export default AboutUs;
