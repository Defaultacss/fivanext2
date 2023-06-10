import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';
import styles from '../Home/Home.module.css';

const BanerSection = ({ type, title, image, description }: any) => {
    let BanerSection;
    if (type === "Right") {
        BanerSection = <Container>
            <div className={styles.bigScreenSoftware}>
                <Row className={styles.animate} style={{ display: "flex" }}>
                    <Col lg={{ span: 6 }} xs={{ span: 12 }} style={{ paddingTop: "15%", paddingBottom: "15%", textJustify: "initial" }}>
                        <h2>
                            {title}
                        </h2>
                    </Col>
                    <Col lg={{ span: 6 }} xs={{ span: 12 }} className={styles.discoverSoftware} style={{ backgroundImage: `url(${image})` }}>
                    </Col>
                </Row>
            </div>
            <div className={styles.smallScreenSoftware} >
                <Row className={styles.animate} style={{ display: "flex" }}>
                    <Col lg={{ span: 6 }} xs={{ span: 12 }} style={{ paddingTop: "15%", paddingBottom: "15%", justifyContent: "center", textAlign: "center" }}>
                        <Image
                            src={image}
                            alt={description}
                            width={600}
                            height={400}
                        />
                    </Col>
                    <Col lg={{ span: 6 }} xs={{ span: 12 }} style={{ paddingTop: "5%", paddingBottom: "15%", justifyContent: "center", textAlign: "center" }}>
                        <h2 style={{ paddingTop: "5%", fontSize: "2rem" }} >
                            {title}
                        </h2>
                    </Col>
                </Row>
            </div>
        </Container>;

    } else if (type === "Left") {
        BanerSection = <Container>
            <div className={styles.bigScreenSoftware}>
                <Row className={styles.animate} style={{ display: "flex" }}>
                    <Col lg={{ span: 6 }} xs={{ span: 12 }} className={styles.discoverSoftware} style={{ backgroundImage: `url(${image})` }}>
                    </Col>
                    <Col lg={{ span: 6 }} xs={{ span: 12 }} style={{ paddingTop: "15%", paddingBottom: "15%", textJustify: "initial" }}>
                        <h2>
                            {title}
                        </h2>
                    </Col>
                </Row>
            </div>
            <div className={styles.smallScreenSoftware} >
                <Row className={styles.animate} style={{ display: "flex" }}>
                    <Col lg={{ span: 6 }} xs={{ span: 12 }} style={{ paddingTop: "5%", paddingBottom: "15%", justifyContent: "center", textAlign: "center" }}>
                        <h2 style={{ paddingTop: "5%", fontSize: "2rem" }} >
                            {title}
                        </h2>
                    </Col>
                    <Col lg={{ span: 6 }} xs={{ span: 12 }} style={{ paddingTop: "15%", paddingBottom: "15%", justifyContent: "center", textAlign: "center" }}>
                        <Image
                            src={image}
                            alt={description}
                            width={600}
                            height={400}
                        />
                    </Col>
                </Row>
            </div>
        </Container>;
    }
    return <>
        {BanerSection}
    </>;

};
export default BanerSection;