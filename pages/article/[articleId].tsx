import ArticleCard from "../../components/ArticleCard/ArticleCard";
import HeadComponent from "../../components/HeadComponent/HeadComponent";
import { ArticleData, OneArticle } from "../../interfaces/props.interface";
import blogService from "../../services/blog.service";
import userService from "../../services/user.service";

const Article = ({ articleData, userData }: ArticleData) => {
    const headerProps = {
        title: articleData ? articleData.headers.title : "",
        keywords: articleData ? articleData.headers.keywords : "",
        content: articleData ? articleData.headers.content : "",
    };

    return (
        <div>
            <HeadComponent {...headerProps} />
            <ArticleCard {...articleData} userData={userData} />
        </div>
    );
};
export default Article;

export async function getStaticPaths() {
    const { data } = await blogService.getArticles();
    const path = data?.data?.map((id: any) => {
        return {
            params: {
                articleId: `${id.id}`,
            },
        };
    });
    return {
        paths: path,
        fallback: true,
    };
}

export async function getStaticProps({ params }: any) {
    const { data } = await blogService.getArticlesById(params.articleId);
    const articleData: OneArticle = data.data;
    const users = await userService.getUserById(articleData.author_id);

    return {
        props: { articleData, userData: users.data.data },
    };
}
