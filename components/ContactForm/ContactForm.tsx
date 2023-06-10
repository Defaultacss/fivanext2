import styles from "./ContactForm.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import { useContext } from "react";
import { MessageContext } from "../../context/message.context";
import emailjs from "@emailjs/browser";
import { Email } from "../../interfaces/service.interface";
import { Spinner } from "react-bootstrap";

const ContactForm = ({ closeModal }: any) => {
    let RefType: any = null;
    const form = useRef(RefType);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const formShape = {
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
    };
    const [registerData, setRegisterData] = useState({ ...formShape });
    const { showMessage } = useContext(MessageContext);
    const EMAILDATA: Email = {
        SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID || "",
        TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await emailjs.sendForm(
                EMAILDATA.SERVICE_ID,
                EMAILDATA.TEMPLATE_ID,
                form.current,
                EMAILDATA.PUBLIC_KEY
            );
            setIsLoading(false);
            closeModal();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            showMessage({
                title: "Enviado",
                description: "Nuestro equipo se pondrá en contacto con usted",
            });
        } catch (error) {
            setIsLoading(false);
            closeModal();
            console.error(error);
            showMessage({ title: "Error", description: "Error al enviar contacto" });
        }
    };
    const handleInputChange = (e: any) => {
        const { value, name } = e.currentTarget;
        setRegisterData({ ...registerData, [name]: value });
    };

    const { name, email, phone, product, message } = registerData;

    return (
        <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre/ Empresa</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    onChange={handleInputChange}
                    value={name}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email </Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                    value={email}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Numero de contacto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Numero"
                    name="phone"
                    maxLength={9}
                    onChange={handleInputChange}
                    value={phone}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Que servicio buscas</Form.Label>
                <Form.Select
                    id="product"
                    name="product"
                    onChange={handleInputChange}
                    value={product}
                    required
                >
                    <option value="">Selecciona que servicio buscas</option>
                    <option>Estudios de eficiencia energética</option>
                    <option>Instalación de autoconsumo</option>
                    <option>Comparativa de tarifas</option>
                    <option>Soluciones de software</option>
                    <option>Digitalización</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Déjanos un mensaje</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    maxLength={250}
                    onChange={handleInputChange}
                    value={message}
                />
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="dark" className={styles.ContactButton}>
                    {isLoading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Enviando...
                        </>
                    ) : (
                        "Contactar"
                    )}
                </Button>
            </div>
        </Form>
    );
};

export default ContactForm;
