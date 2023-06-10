import axios from "axios";


class UserService {
    private api: any;

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_API_URL}/users` });
    }

    public getUserById = (userId: number) => {
        return this.api.get(`users?id=${userId}`);
    };
}

const userService = new UserService();

export default userService;
