import SingleCategory from "../../components/SingleCategory/SingleCategory";
import blogService from "../../services/blog.service";
import { OneCategory } from "../../interfaces/props.interface";
import HeadComponent from "../../components/HeadComponent/HeadComponent";

type CategoryIdProps = {
    data: OneCategory;
};
const Category = ({ data }: CategoryIdProps) => {
    const headerProps = {
        title: data ? data.headers.title : "",
        keywords: data ? data.headers.keywords : "",
        content: data ? data.headers.content : "",
    };
    return (
        <div>
            <HeadComponent {...headerProps} />
            <SingleCategory category={data} />
        </div>
    );
};
export default Category;

export async function getStaticPaths() {
    const { data } = await blogService.getCategories();
    const path = data?.data?.map((id: any) => {
        return {
            params: {
                categoryId: `${id.id}`,
            },
        };
    });
    return {
        paths: path,
        fallback: true,
    };
}

export async function getStaticProps({ params }: any) {
    const { data } = await blogService.getBlogById(params.categoryId);
    return {
        props: {
            data,
        },
    };
}
