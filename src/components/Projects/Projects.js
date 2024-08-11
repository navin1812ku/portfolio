import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png"}
              title="ShopSmartly"
              description="Developed an e-commerce website similar to Amazon and Flipkart using the MERN stack (MongoDB, Express.js, React, Node.js). 
              Roles like Admin, User, Vendor, and Courier, each with specific functionalities like product management, order placement, and 
              delivery status updates. Project taught me role management using JWT authentication and authorization."
              ghLink="https://github.com/navin1812ku/shop-smartly"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://qph.cf2.quoracdn.net/main-qimg-0dbec8583ecac3c448e92beb7da219f7"}
              title="Flim Fetch"
              description="Film Fetch is a dynamic web application built using the MERN stack, allowing users to effortlessly search for movies and add them 
              to personalized lists. Users can create, explore, and manage their custom movie collections with an intuitive interface. This project 
              demonstrates the seamless integration of MongoDB, Express.js, React.js, and Node.js to deliver a rich user experience."
              ghLink="https://github.com/navin1812ku/movie-list-fronend"
              demoLink="https://movie-list-apllication.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8OJ8nAfuijH0NbHcvi0n95v-g-NpCGRPdA&s"}
              title="Agri market"
              description="Innovative web application empowering farmers and retailers to connect directly, eliminating the need for mediators. Farmers can 
              easily list their products, while retailers browse and purchase what they need, all while maintaining comprehensive transaction 
              histories for both parties. Project employs Spring boot, JPA, MySQL Workbench, and REST API."
              ghLink="https://github.com/navin1812ku/agriMarket"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.shutterstock.com/image-photo/bus-traveling-on-asphalt-road-600nw-1345741577.jpg"}
              title="Smart Bus Ticket Reservation System"
              description="A Java-based web application, utilizing Java 8, Spring Boot, REST API, JPA, and MySQL Workbench, streamlines bus ticket booking. 
              Users can search and select pick-up and drop-off locations, view bus details including timing and available seats, and make 
              bookings. The system facilitates real-time rate updates, offers, and deals for customers and agents."
              ghLink="https://github.com/navin1812ku/ebus_reservation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/08/buying_second_hand1.jpg"}
              title="Second Hand Items"
              description="We developed an online marketplace using Spring Boot, MySQL, JPA, and Hibernate, allowing users to buy 
              and sell products. The platform features contact options via phone number or in-app messaging, facilitating direct 
              communication between buyers and sellers."
              ghLink="https://github.com/navin1812ku/second-hand-item"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
