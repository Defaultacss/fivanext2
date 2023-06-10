import React, { useState } from "react";
import styles from "./ContactModal.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactForm from "../ContactForm/ContactForm";
import { TrackGoogleAnalyticsEvent } from "../../GoogleTracking/GoogleTracking";

const ContactModal = ({ isBlue = false }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const contactClick = () => {
        handleShow();
        TrackGoogleAnalyticsEvent("Home Page", "Contact button clicked", "Button");
    };

    return (
        <>
            {isBlue ? (
                <Button className={"btn"} onClick={contactClick} variant="warning">
                    <strong>Contáctanos</strong>
                </Button>
            ) : (
                <Button
                    style={{ width: "300px" }}
                    className="mb-4"
                    id={styles.Button}
                    onClick={contactClick}
                    variant="outline-dark"
                >
                    <strong>Contáctanos</strong>
                </Button>
            )}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Que servicio necesitas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm closeModal={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ContactModal;
