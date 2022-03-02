import React from "react";
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

const JobList = ({ data }) => (
  <Row className="mt-3">
    <Col xs={2}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={10}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
   
  </Row>
);

export default JobList;
