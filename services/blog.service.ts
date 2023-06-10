import axios from "axios";

class BlogService {
    private api: any;

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_API_URL}` });
    }

    public getMainPage = () => {
        return this.api.get(`/blog-views/blog/`);
    };

    public getBlogById = (id: string) => {
        return this.api.get(`/blog-views/blog/${id}/`);
    };

    public getCategories = () => {
        return this.api.get(`/blog/topic`);
    };

    public getCategoriesById = (topicId: number) => {
        return this.api.get(`/blog/topic?id=${topicId}`);
    };

    public getArticles = () => {
        return this.api.get("/blog/article");
    };

    public getArticlesByCategory = (topicId: number) => {
        return this.api.get(`/blog/article/topic?id=${topicId}`);
    };

    public getArticlesById = (articleId: number) => {
        return this.api.get(`/blog/article?id=${articleId}`);
    };
}

const blogService = new BlogService();

export default blogService;
