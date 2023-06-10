import styles from "./Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Image as BtImage } from "react-bootstrap";
import ContactModal from "../ContactModal/ContactModal";
import OurService from "../OurService/OurService";
import BanerSection from "../BanerSection/BanerSection";
import { useEffect, useState } from "react";
export const HOME_IMG = {
    LABOR1: {
        SRC: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg",
        ALT: "trabajadora con ordenador",
    },
    LABOR2: {
        SRC: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1164863397-612x612_w8ptfa.jpg",
        ALT: "mujer sonriendo con ordenador",
    },
    LABOR3: {
        SRC: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1178152960-612x612_tifmzf.jpg",
        ALT: "cliente de fiva.",
    },
};
export const softwareSection: any = {
    type: "Right",
    title:
        "Desarrollamos soluciones de software para mejorar la eficiencia energética.",
    image:
        "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1674069773/Cartoon_tech_team_people_creating_robots_in_lab_x2rqsc.jpg",
    description:
        "Descubre como ayudamos a Empresas a ahorrar unicamente con Software",
};
export const solarSection: any = {
    type: "Left",
    title: "Transforma tu negocio en una fuente de energía renovable",
    image:
        "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1674075628/8590_bff8jk.jpg",
    description: "Transforma tu negocio en una fuente de energía renovable",
};
export const digitalSection: any = {
    type: "Right",
    title: "Digitalizamos tu negocio totalmente a medida",
    image:
        "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1674075953/20945431_bqnslm.jpg",
    description: "Digitalizamos tu negocio totalmente a medida",
};
export const VIDEO = {
    FIRST: "../../main.mp4",
    SECOND: "../../main-start.mp4",
};
const Home = () => {
    const [url, setUrl] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setUrl(true);
        }, 3700);
    }, []);

    return (
        <>
            <Container id={styles.section1} fluid>
                <Row className={styles.animate}>
                    <Col
                        id={styles.titleHome}
                        lg={{ span: 6 }}
                        style={{ padding: "0px 0px" }}
                    >
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <h1 className={styles.homeTitle}>
                                Asesoramiento en eficiencia energética y el desarrollo de
                                software
                            </h1>
                        </div>
                        <div className={styles.contactModal}>
                            <ContactModal />
                        </div>
                    </Col>
                    <Col lg={{ span: 6 }}>
                        {url && (
                            <video
                                id={styles.video}
                                autoPlay
                                muted
                                loop
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: "80vh",
                                    objectFit: "fill",
                                }}
                            >
                                <source src={VIDEO.SECOND} type="video/mp4" />
                            </video>
                        )}
                        {!url && (
                            <video
                                id={styles.video}
                                autoPlay
                                muted
                                loop
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: "80vh",
                                    objectFit: "fill",
                                }}
                            >
                                <source src={VIDEO.FIRST} type="video/mp4" />
                                {/* {url ?
                                <source src={VIDEO.SECOND} type="video/mp4" /> : <source src={VIDEO.FIRST} type="video/mp4" />} */}
                            </video>
                        )}
                    </Col>
                </Row>
            </Container>

            <BanerSection {...softwareSection} />
            <BanerSection {...solarSection} />
            <BanerSection {...digitalSection} />

            <section className={styles.OurService}>
                <OurService />
            </section>

            <section id={styles.section2}>
                <Container fluid>
                    <h2>Nuestra Labor</h2>
                    <Row>
                        <Col
                            xs={12}
                            md={{ span: 6, offset: 3 }}
                            className={styles.aboutSection}
                        >
                            <h4 id={styles.th4}>
                                Nuestra plantilla se compone de abogados, administradores e
                                ingenieros especializados en el sector eléctrico, para ofrecer
                                así un servicio de gestión integral en energía.
                            </h4>
                        </Col>
                    </Row>

                    <Row>
                        <Col
                            className={styles["animateImg glow delay-1"]}
                            xs={12}
                            md={{ span: 4, offset: 1 }}
                            style={{ padding: "0px", marginBottom: "2%" }}
                        >
                            <Image
                                src={HOME_IMG.LABOR1.SRC}
                                alt={HOME_IMG.LABOR1.ALT}
                                width={600}
                                height={400}
                            />
                        </Col>

                        <Col
                            className={styles["animateImg glow delay-2"]}
                            xs={12}
                            md={{ span: 3, offset: 1 }}
                            style={{ padding: "0px" }}
                        >
                            <Image
                                src={HOME_IMG.LABOR2.SRC}
                                alt={HOME_IMG.LABOR2.ALT}
                                width={600}
                                height={400}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className={styles["animateImg glow delay-3"]}
                            xs={12}
                            md={{ span: 5, offset: 1 }}
                            style={{ padding: "0px" }}
                        >
                            <Image
                                src={HOME_IMG.LABOR3.SRC}
                                alt={HOME_IMG.LABOR3.ALT}
                                width={600}
                                height={400}
                            />
                        </Col>
                        <Col
                            className={styles["animateImg glow delay-4"]}
                            xs={12}
                            id={styles.sect3text}
                            md={{ span: 4, offset: 0 }}
                            style={{ padding: "0px" }}
                        >
                            <h3>
                                Contactamos con Fiva porque nuestra factura había aumentado un
                                30% desde 2020 y gracias a Fiva hemos ahorrado 2000€ en el
                                ultimo año.
                            </h3>
                            <p>Julian</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id={styles["section2-small"]}>
                <Container fluid>
                    <h2 className={styles.centered}>Nuestra Labor</h2>
                    <Row>
                        <Col xs={12}>
                            <h4 id={styles.th4}>
                                Nuestra plantilla se compone de profesionales especializados en
                                el sector eléctrico, para ofrecer así un servicio de gestión
                                integral en energía.
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className={styles["animateImg glow delay-3"]}
                            xs={12}
                            lg={{ span: 6 }}
                            style={{ padding: "0px" }}
                        >
                            <BtImage
                                style={{ maxWidth: "93vw" }}
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1661269424/istockphoto-1327250710-612x612_avsklg.jpg"
                            />
                        </Col>
                        <Col
                            className={styles["animateImg glow delay-4"]}
                            xs={12}
                            id={styles.sect3text}
                            lg={{ span: 6 }}
                            style={{ padding: "0px", paddingTop: "5%" }}
                        >
                            <h3>
                                Contactamos con Fiva porque nuestra factura había aumentado un
                                30% desde 2020 y gracias a Fiva hemos ahorrado 2000€ en el
                                último año.
                            </h3>
                            <p>Maria</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id={styles.section5}>
                <Container fluid>
                    <Row>
                        <Col id={styles.ib2} lg={{ span: 6 }} md={{ span: 12 }}></Col>

                        <Col
                            id={styles.titleHome}
                            lg={{ span: 6 }}
                            md={{ span: 12 }}
                            style={{ padding: "0px 60px" }}
                        >
                            <h1>¿Te sientes perdido? Pregúntanos!</h1>
                            <ContactModal />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;
