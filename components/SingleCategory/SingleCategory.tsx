import { Col, Container, Row } from "react-bootstrap";
import Styles from "../../styles/Home.module.css";
import { Card } from "antd";
import { ArticleProps } from "../../interfaces/props.interface";
import Link from "next/link";
const { Meta } = Card;

const SingleCategory = ({ category }: any) => {
    const article = category?.blog;

    return (
        <>
            <Container
                style={{
                    backgroundImage: `url(${category?.big_image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "60vh",
                }}
                fluid
            >
                <Row>
                    <Col
                        className={Styles.ServicepymeTitle}
                        xs={{ span: 12 }}
                        md={{ span: 12 }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: "2.5rem",
                                textShadow: "-1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey",
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "30vh",
                                alignItems: "center",
                            }}
                        >
                            <h1
                                style={{
                                    width: "100%",
                                }}
                            >
                                {category?.title}
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container
                style={{
                    paddingTop: "6%",
                    paddingBottom: "6%",
                }}
            >
                <Row>
                    {article?.length > 0 &&
                        article?.map((item: ArticleProps) => {
                            return (
                                <Col md={{ span: 4 }} key={item?.id}>
                                    <Link href={`/article/${item?.id}`}>
                                        <Card
                                            hoverable
                                            style={{ maxWidth: "20vw" }}
                                            cover={
                                                <img alt={item?.description} src={item?.small_image} />
                                            }
                                        >
                                            <Meta title={item?.title} style={{ color: "purple" }} />
                                        </Card>
                                    </Link>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </>
    );
};
export default SingleCategory;
