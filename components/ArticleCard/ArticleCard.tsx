import { Avatar } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { OneArticle } from "../../interfaces/props.interface";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";

const ArticleCard = ({
    title,
    description,
    rich_text,
    big_image,
    date,
    userData
}: OneArticle | any) => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }} style={{ paddingTop: "6%" }}>
                    <h1>{title}</h1>
                    <br />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingTop: "2%",
                        }}
                    >
                        <div style={{ display: "flex", gap: "10px" }}>
                            <Avatar size="large" icon={userData?.image ? <img src={userData?.image} alt="icon logo" /> : <UserOutlined />} />
                            <div>
                                <p>
                                    <span style={{ color: "grey" }}>{userData?.name}</span>
                                    <br />
                                    <span style={{
                                        color: "black",
                                        textDecoration: "underline",
                                        textDecorationColor: "purple",
                                        textDecorationThickness: "3px"
                                    }}>Fiva.</span>
                                </p>
                            </div>
                        </div>
                        <div style={{ justifyContent: "end", color: "purple" }}>{date}</div>
                    </div>
                </Col>
                <Col md={{ span: 8, offset: 2 }} style={{ marginBottom: "3%" }}>
                    <div style={{
                        backgroundImage: `url(${big_image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        minHeight: "40vh"
                    }}>
                    </div>
                    <div style={{ display: "none" }}>
                        <Image
                            src={big_image}
                            alt={description}
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>

                </Col>

                <Col md={{ span: 8, offset: 2 }} style={{
                    marginBottom: "5%"
                }}>
                    <section dangerouslySetInnerHTML={{ __html: rich_text }} />
                </Col>
            </Row>
        </Container>
    );
};
export default ArticleCard;
