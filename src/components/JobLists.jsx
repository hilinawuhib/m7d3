import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "../redux/actions";
import { connect } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (company) => dispatch(addToFavoriteAction(company)),
  removeFromFavourites: (company) =>
    dispatch(removeFromFavoriteAction(company)),
});

const JobList = ({
  data,
  favorite,
  addToFavouriteAction,
  removeFromFavouriteAction,
}) => {
  const isFavorite = favorite.includes(data.company_name);
  console.log(isFavorite, favorite);
  const toggleFavorite = () => {
    isFavorite
      ? removeFromFavoriteAction(data.company_name)
      : addToFavoriteAction(data.company_name);
  };
  return (
    <Row className="mt-5 joblist">
      <Col xs={6}>
        {isFavorite ? (
          <AiFillHeart
            size={32}
            className="me-4 my-auto"
            onClick={toggleFavorite}
          />
        ) : (
          <BsHeart
            size={32}
            className=" me-4 my-auto"
            onClick={toggleFavorite}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={6}>
        <p> {data.category}</p>
      </Col>
      <Col xs={2}>
        <p> {data.job_type}</p>
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
