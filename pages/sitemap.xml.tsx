import { GetServerSideProps } from "next";
import sitemap from "../sitemap";
import blogService from "../services/blog.service";
import { OneArticle, OneCategory } from "../interfaces/props.interface";

export default function Sitemap(props: { sitemap: string; }) {
    return props.sitemap;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const getArticles = async (): Promise<OneArticle[]> => {
        const { data } = await blogService.getArticles();
        return data?.data;
    };
    const getCategories = async (): Promise<OneCategory[]> => {
        const { data } = await blogService.getCategories();
        return data?.data;
    };
    const articles: any = await getArticles();
    const categories: any = await getCategories();
    const sitemapXML = await sitemap({ articles, categories });
    if (res) {
        res.setHeader("Content-Type", "text/xml");
        res.write(sitemapXML);
        res.end();
    }
    return {
        props: {
            sitemap: sitemapXML,
        },
    };
};
