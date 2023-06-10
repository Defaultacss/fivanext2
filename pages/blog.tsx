import BlogCategories from "../components/BlogCategories/BlogCategories";
import { CategoriesProps } from "../interfaces/props.interface";
import blogService from "../services/blog.service";

type BlogProps = {
    data: CategoriesProps;
};

const BlogPage = ({ data }: BlogProps) => {
    return <BlogCategories categories={data} />;
};
export default BlogPage;

export async function getStaticProps() {
    const { data } = await blogService.getMainPage();

    return {
        props: {
            data,
        },
        /**
         * time in seconds
         * this tells if last generated page was more than 60 seconds ago, pregenerate it
         */
        revalidate: 86400,
    };
}
