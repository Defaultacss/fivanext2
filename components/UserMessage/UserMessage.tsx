import { useContext } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { MessageContext } from "../../context/message.context";
import styles from "./UserMessage.module.css";


const UserMessage = () => {
    const { show, setShow, messageInfo } = useContext(MessageContext);

    return (
        <ToastContainer className="p-4" position={"top-end"} >
            <Toast show={show} autohide delay={3000} onClose={() => setShow(false)}>
                <Toast.Header>
                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656182281/FIVA_LOGO2_rovx00.png"
                        id={styles.toastIcon} className="rounded me-2" alt="fiva logo" />
                    <strong className="me-auto">{messageInfo.title}</strong>
                </Toast.Header>
                <Toast.Body style={{ textAlign: "center" }}>{messageInfo.description}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default UserMessage;