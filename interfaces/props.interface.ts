export interface HeaderProps {
    title: string;
    keywords: string;
    content: string;
}
export interface ReducedBlog {
    id: number;
    title: string;
    description?: string;
    small_image?: string;
}

export interface CategoriesProps {
    id: number;
    title: string;
    description: string;
    big_image: string;
    small_image: string;
    headers_id: number;
    date: string;
    blog?: ReducedBlog;
}

export interface ArticleProps {
    id: number;
    title: string;
    description: string;
    topic_id: number;
    author_id: number;
    headers_id: number;
    rich_text: string;
    big_image: string;
    small_image: string;
    date: string;
}

export interface ArticleThree {
    articleId: number;
    articleTitle: string;
}

export interface Headers {
    id: number;
    title: string;
    keywords: string;
    content: string;
}

export interface OneCategory {
    id: number;
    title: string;
    description: string;
    big_image: string;
    small_image: string;
    headers_id: number;
    date: string;
    headers: Headers;
    blog?: ReducedBlog;
}

export interface OneArticle {
    id: number;
    title: string;
    description: string;
    topic_id: number;
    author_id: number;
    headers_id: number;
    rich_text: string;
    big_image: string;
    small_image: string;
    date: string;
    headers: Headers;
}

export interface ArticleData {
    articleData: OneArticle;
    userData: any;
}
