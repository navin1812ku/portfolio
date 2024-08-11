import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function InternshipCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title><span className="purple">{props.title}</span></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Card.Subtitle><span className="purple">Technologies</span></Card.Subtitle>
                <Card.Text>
                    {props.technologies}
                </Card.Text>
                <Card.Subtitle><span className="purple">Tools</span></Card.Subtitle>
                <Card.Text>
                    {props.tools}
                </Card.Text>
                <Button variant="primary" href={props.cLink} target="_blank">
                    Certificate
                </Button>
            </Card.Body>
        </Card>
    );
}
export default InternshipCards;
