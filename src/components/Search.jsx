import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import JobList from "./JobLists";
import uniqid from "uniqid";

class Search extends Component {
  state = {
    query: "",
    jobs: [],
  };

  BASE_URL = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      this.BASE_URL + this.state.query + "&limit=15"
    );

    if (!response.ok) {
      console.log("error");
      return;
    }

    const { data } = await response.json();

    this.setState({ jobs: data });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3"></Col>
          <Col xs={8} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="job title,company"
              />
            </Form>
          </Col>
          <Col xs={4} className="mx-auto ">
            <Button variant="outline-dark" onClick={this.handleSubmit}>
              search
            </Button>
          </Col>
          <Col xs={10} className="mx-auto mb-4">
            {this.state.jobs.map((jobData) => (
              <JobList key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
