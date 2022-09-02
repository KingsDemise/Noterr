import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Noterr</h1>
              <p className="subtitle">Take Notes. We'll Keep.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="homebtn">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="homebtn">
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
