import React, { useState } from "react";
import { createContext } from "react";

let typeContext: any;
const MessageContext = createContext(typeContext);

function MessageProviderWrapper(props: any) {
    const [show, setShow] = useState(false);
    const [messageInfo, setMessageInfo] = useState({
        title: "",
        description: "",
    });

    const showMessage = ({ title, description }: any) => {
        setShow(true);
        setMessageInfo({ title, description });
    };

    return <MessageContext.Provider value={{ show, setShow, messageInfo, showMessage }}>
        {props.children}
    </ MessageContext.Provider>;
}

export { MessageContext, MessageProviderWrapper };
