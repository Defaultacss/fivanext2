import styles from "./Navigation.module.css";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import ContactModal from "../ContactModal/ContactModal";

const Navigation = () => {
    const logoImage =
        "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1674063537/Original_size_FIVA_2_k3vfwc.png";
    // const logoImage = "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1658079723/FIVA_8_3_u0dayt.png";

    return (
        <Navbar collapseOnSelect id={styles.navigation} expand="lg" variant="dark">
            <Container id={styles.fontSizeContainer}>
                <Navbar.Brand>
                    <Link href="/">
                        <img src={logoImage} width={90} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id={styles.info} className="me-auto">
                        <Link href="/">
                            <Nav.Link href="/#" id={styles.link}>
                                Home
                            </Nav.Link>
                        </Link>
                        <Link href="/about">
                            <Nav.Link href="/#" id={styles.link}>
                                Sobre Fiva
                            </Nav.Link>
                        </Link>

                        <NavDropdown
                            className={styles["butonLog-service"]}
                            title="Clientes"
                            id={`offcanvasNavbarDropdown-expand-md`}
                        >
                            <NavDropdown.Item style={{ padding: 0 }}>
                                <Link href="/pyme" className={styles.coloredFiva}>
                                    <div className={styles.spaceLink}>
                                        <span>Pymes</span>
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{ padding: 0 }}>
                                <Link href="/bigconstumer" className={styles.coloredFiva}>
                                    <div className={styles.spaceLink}>
                                        <span>Grandes consumidores</span>
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{ padding: 0 }}>
                                <Link href="/administrator" className={styles.coloredFiva}>
                                    <div className={styles.spaceLink}>
                                        <span>Administradores de fincas</span>
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            className={styles["butonLog-service"]}
                            title="Servicios"
                            id={`offcanvasNavbarDropdown-expand-md`}
                        >
                            <NavDropdown.Item style={{ padding: 0 }}>
                                <Link href="/power" className={styles.coloredFiva}>
                                    <div className={styles.spaceLink}>
                                        <span>Ajuste de optimización de potencia</span>
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{ padding: 0 }}>
                                <Link href="/energy" className={styles.coloredFiva}>
                                    <div className={styles.spaceLink}>
                                        <span>Estudios de eficiencia energética</span>
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{ padding: 0 }}>
                                <Link href="/transition" className={styles.coloredFiva}>
                                    <div className={styles.spaceLink}>
                                        <span>Transición a energía renovable</span>
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{ padding: 0 }}>
                                <Link href="/price" className={styles.coloredFiva}>
                                    <div className={styles.spaceLink}>
                                        <span>Comparativa de tarifas</span>
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{ padding: 0 }}>
                                <Link href="/solutions" className={styles.coloredFiva}>
                                    <div className={styles.spaceLink}>
                                        <span>Soluciones de software</span>
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{ padding: 0 }}>
                                <Link href="/digitalitation" className={styles.coloredFiva}>
                                    <div className={styles.spaceLink}>
                                        <span>Digitalización</span>
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link href="/blog">
                            <Nav.Link href="/#" id={styles.link}>
                                Blog
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                <div className={styles.contactForm}>
                    <ContactModal isBlue={true} />
                </div>
            </Container>
        </Navbar>
    );
};

export default Navigation;
