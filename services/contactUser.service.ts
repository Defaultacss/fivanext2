import axios from "axios";
import { AxiosPromise } from "axios";
import { Contact } from "../interfaces/service.interface";


class ContactUserService {
  api: any;

  constructor() {
    this.api = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_API_URL}/contacts` });
  }

  getContacts = (): AxiosPromise => {
    return this.api.get(`/contact`);
  };

  createContact = (contact: Contact): AxiosPromise => {
    return this.api.post("/contact", contact);
  };

  updateContactState = (userName: any): AxiosPromise => {
    return this.api.put(`/contact`, userName);
  };

  addComments = (comment: any): AxiosPromise => {
    return this.api.post("/addcomments", comment);
  };
}

const contactUserService = new ContactUserService();

export default contactUserService;
