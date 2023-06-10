import React from "react";
import styles from "./BlogCategories.module.css";
import { Carousel } from "antd";
import Categories from "../Categories/Categories";
import { Container, Row } from "react-bootstrap";
import { CategoriesProps } from "../../interfaces/props.interface";

const BlogCategories = ({ categories }: any) => {
    const CARROUSELDATA = [
        {
            IMG: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1670352004/pexels-pixabay-414860_vilhkr.jpg",
            TITLE: "Libertad Energética",
            ALT: "Imagen acerca de cómo funciona la energía",
        },
        {
            IMG: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1670352000/pexels-pok-rie-157827_uj780l.jpg",
            TITLE: "Distribución",
            ALT: "Imagen acerca de como funciona Distribución energética",
        },
        {
            IMG: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1670352011/pexels-pixabay-459740_x3n7rl.jpg",
            TITLE: "Descubrimientos",
            ALT: "Imagen sobre ultimas novedades y descubrimientos en el ámbito de energéticos",
        },
    ];

    return (
        <div>
            <Carousel autoplay>
                {CARROUSELDATA.map((carrousel) => {
                    return (
                        <div key={carrousel.TITLE}>
                            <h1
                                style={{
                                    fontSize: "2.5rem",
                                    textShadow:
                                        "-1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey",
                                    height: "60vh",
                                    color: "#fff",
                                    lineHeight: "40vh",
                                    textAlign: "center",
                                    backgroundImage: `url(${carrousel.IMG})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            >
                                {carrousel.TITLE}
                            </h1>
                        </div>
                    );
                })}
            </Carousel>
            <Container
                style={{
                    paddingBottom: "8%",
                }}
            >
                <Row>
                    <div
                        style={{
                            textAlign: "center",
                            paddingTop: "6%",
                            paddingBottom: "6%",
                            color: "rgb(40, 18, 58)",
                        }}
                    >
                        <h1>Fiva Blog</h1>
                    </div>
                </Row>
                <Row>
                    {categories.map((category: CategoriesProps) => {
                        return (
                            <Categories
                                {...category}
                                articleData={category.blog}
                                key={category.id}
                            />
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default BlogCategories;
