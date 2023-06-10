import styles from "./OurService.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const OurService = () => {
  const SERVICEPICTURE = {
    POWER: {
      SRC: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/potencia_fd2mre.jpg",
      ALT: "icono de optimización"
    },
    EFFICY: {
      SRC: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/eficiencia_blliwp.jpg",
      ALT: "icono de eficiencia energetica"
    },

    COMPARATIVE: {
      SRC: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/comparativa_rhkhyf.jpg",
      ALT: "icono de comparativa de tarifa"
    },
    SOFTSOLUTIONS: {
      SRC: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/software_fwwzro.jpg",
      ALT: "icono de soluciones de software"
    },
    DIGITALITATION: {
      SRC: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/digit_uvqarg.jpg",
      ALT: "icono de digitalización"
    },
  };
  return (
    <Container fluid>
      <h2 className={styles.Servicetitle}>Nuestros Servicios</h2>
      <Row className={styles.Servicerow}>
        <Col
          className="d-flex justify-content-center"
          xs={{ span: 12 }}
          md={{ span: 4, offset: 2 }}
        >
          <Image
            src={SERVICEPICTURE.POWER.SRC}
            alt={SERVICEPICTURE.POWER.ALT}
            width={150}
            height={150}
          />

        </Col>
        <Col className={styles.title1} xs={12} md={6}>
          <h3>Ajuste de optimización de potencia</h3>
        </Col>
      </Row>
      <Row className={styles.Servicerow}>
        <Col
          className="d-flex justify-content-center"
          xs={{ span: 12 }}
          md={{ span: 4, offset: 2 }}
        >
          <Image
            src={SERVICEPICTURE.EFFICY.SRC}
            alt={SERVICEPICTURE.EFFICY.ALT}
            width={150}
            height={150}
          />
        </Col>
        <Col className={styles.title1} xs={12} md={6}>
          <h3>Estudios de eficiencia energética</h3>
        </Col>
      </Row>
      <Row className={styles.Servicerow}>
        <Col
          className="d-flex justify-content-center"
          xs={{ span: 12 }}
          md={{ span: 4, offset: 2 }}
        >
          <Image
            src={SERVICEPICTURE.COMPARATIVE.SRC}
            alt={SERVICEPICTURE.COMPARATIVE.ALT}
            width={150}
            height={150}
          />
        </Col>
        <Col className={styles.title1} xs={12} md={6}>
          <h3>Comparativa de tarifas</h3>
        </Col>
      </Row>
      <Row className={styles.Servicerow}>
        <Col
          className="d-flex justify-content-center"
          xs={{ span: 12 }}
          md={{ span: 4, offset: 2 }}
        >
          <Image
            src={SERVICEPICTURE.SOFTSOLUTIONS.SRC}
            alt={SERVICEPICTURE.SOFTSOLUTIONS.ALT}
            width={150}
            height={150}
          />
        </Col>
        <Col className={styles.title1} xs={12} md={6}>
          <h3>Soluciones de software</h3>
        </Col>
      </Row>
      <Row className={styles.Servicerow}>
        <Col
          className="d-flex justify-content-center"
          xs={{ span: 12 }}
          md={{ span: 4, offset: 2 }}
        >
          <Image
            src={SERVICEPICTURE.DIGITALITATION.SRC}
            alt={SERVICEPICTURE.DIGITALITATION.ALT}
            width={150}
            height={150}
          />
        </Col>
        <Col className={styles.title1} xs={12} md={6}>
          <h3>Digitalización</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default OurService;
