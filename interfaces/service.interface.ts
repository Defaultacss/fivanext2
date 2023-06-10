export interface ContactService {
    api: string;
}

export interface Contact {
    name: string,
    email: string,
    phone: string,
    product: string,
    message: string;
}

export interface Email {
    SERVICE_ID: string;
    TEMPLATE_ID: string;
    PUBLIC_KEY: string;
}