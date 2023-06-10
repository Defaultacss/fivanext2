import styles from "./Categories.module.css";
import { Col } from "react-bootstrap";
import { List } from "antd";
import Link from "next/link";
import { ReducedBlog } from "../../interfaces/props.interface";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Categories = ({
    id,
    title,
    description,
    small_image,
    articleData,
}: any) => {
    const dataSource = [
        { title: title, description: description, small_image: small_image },
    ];
    const MAX_SCREEN_SIZE = 550;
    const { height, width } = useWindowDimensions();

    return (
        <Col lg={{ span: 6 }} md={12}>
            <List
                className={styles.list}
                itemLayout="vertical"
                size="large"
                dataSource={dataSource}
                renderItem={() => (
                    <>
                        <Link href={`/category/${id}`}>
                            <List.Item
                                className={styles.hoverLink}
                                key={title}
                                extra={
                                    <img
                                        style={{
                                            background: "#fff",
                                            borderRadius: "10px",
                                        }}
                                        width={width <= MAX_SCREEN_SIZE ? 200 : 272}
                                        alt={description}
                                        src={small_image}
                                    />
                                }
                            >
                                <List.Item.Meta
                                    title={
                                        <>
                                            <p>{title}</p>
                                            <hr />
                                        </>
                                    }
                                    description={description}
                                />
                            </List.Item>
                        </Link>

                        {articleData.length > 0 &&
                            articleData.map((article: ReducedBlog) => {
                                return (
                                    <div
                                        style={{
                                            borderRadius: "0px 0px 10px 10px",
                                            padding: "3%",
                                        }}
                                        key={article.id}
                                    >
                                        <Link href={`/article/${article.id}`}>
                                            <h6 className={styles.underline}>{article.title}</h6>
                                        </Link>
                                    </div>
                                );
                            })}
                    </>
                )}
            />
        </Col>
    );
};

export default Categories;
