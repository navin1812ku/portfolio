import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import InternshipCards from "./InternshipCards";

function Internship() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Internships </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few internships I've completed recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <InternshipCards
                            imgPath={"https://codewave.com/insights/wp-content/uploads/2022/08/mern-stack-header-codewave.jpg"}
                            title="MERN Stack"
                            description="Participated in an internship program which was conducted by Channel B.Tech. With this internship program an extensive 
                            experience gained in developing web application using the MERN Stack. "
                            technologies="MongoDB, ReactJS, ExpressJS, NodeJS"
                            tools="VS Code, Postman, Github"
                            cLink="https://drive.google.com/file/d/1rX7KMOJN93CB5dWVfRxwZHRuvWpS128L/view"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <InternshipCards
                            imgPath={"https://fullscale.io/wp-content/uploads/2024/02/spring-boot-and-react-js.png"}
                            title="Java Full Stack"
                            description="Participated in an internship program which was conducted by Edu Station. Completed a comprehensive internship specializing in 
                            Full Stack Development, acquiring advanced skills in React JS, Spring Boot Framework and MySQL."
                            technologies="Spring boot, MySQL Workbench, ReactJS"
                            tools="Intellij IDEA, Postman, Github"
                            cLink="https://drive.google.com/file/d/17oi02z2E1oYDs2g-J6TL4_6gfhFmf94B/view"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Internship;
