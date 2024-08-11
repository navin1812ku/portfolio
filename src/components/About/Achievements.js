import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Achievements() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        <br />
                        <ul>
                            <li className="about-activity">
                                <ImPointRight /> Won special mention award in <span className="purple">Coding premier League contest</span> Among top 100 coders.
                            </li>
                            <br />
                            <li className="about-activity">
                                <ImPointRight /> Selected as my department's <span className="purple">top performer</span> overall based on my academic success and coding abilities.
                            </li>
                            <br />
                            <li className="about-activity">
                                <ImPointRight /> Honored to be nominated for the <span className="purple">Best Self-Learner Award</span> based on the courses and certifications completed.
                            </li>
                            <br />
                            <li className="about-activity">
                                <ImPointRight /> Achieved the <span className="purple">top position</span> once among 369 average participants at Sri Eshwar College of Engineering in a Coding Ninja contest.
                            </li>
                            <br />
                            <li className="about-activity">
                                <ImPointRight /> Earned a <span className="purple">5-star badge</span> in Java, an Amateur Badge and a Basic Programming <span className="purple">3-star badge</span> on HackerEarth.
                            </li>
                        </ul>
                        
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Achievements;
