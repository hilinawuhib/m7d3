import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavoriteAction } from "../redux/actions";
const mapStateToProps = () => ({
 
});
const mapDispatchToProps = (dispatch) => ({
  addToFavoriteAction: (jobToAdd) => {
    dispatch(addToFavoriteAction(jobToAdd));
  },
});

const JobList = ({ data }) => (
  <Row className="mt-5 joblist">
    <Col xs={4}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={8}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={2}>
      <p> {data.category}</p>
    </Col>
    <Col xs={6}>
      <p> {data.job_type}</p>
    </Col>
    <Col xs={4}>
    <Button className="btnfav"
      color="success"
   >
      add to favs
    </Button>
    </Col>
   
  </Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
