// By Yeran L Concepcion
// 10/1/2020

import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import "../App.css";

class LogInForm extends Component {
  emailIcon = (<i className="fab fa-user"></i>);

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col sm={7}>
            <Card style={{ borderRadius: "15px", marginTop: "3rem" }}>
              <Card.Body>
                <Card.Title>
                  <h1
                    className="text-center"
                    style={{
                      fontWeight: "500",
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  >
                    Welcome back !
                  </h1>
                </Card.Title>
                <Card.Text>
                  <InputGroup style={{ marginBottom: "1rem" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i class="far fa-user"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      id="Username"
                      placeholder="Username or email"
                    />
                  </InputGroup>

                  <InputGroup style={{ marginBottom: "1rem" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i class="fas fa-lock"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="password"
                      id="Password"
                      placeholder="Password"
                    />
                  </InputGroup>
                </Card.Text>
                <div className="text-center">
                  <Button className="btn--primary" variant="primary">
                    LOG IN
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogInForm;
