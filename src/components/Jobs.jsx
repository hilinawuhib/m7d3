import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (company) => dispatch(addToFavoriteAction(company)),
  removeFromFavorites: (company) => dispatch(removeFromFavoriteAction(company)),
});

function Jobs({ data, favorite, addToFavorites, removeFromFavorites }) {
  const isFavorite = favorite.jobs.includes(data.company_name);
  console.log(isFavorite, favorite.jobs);
  const toggleFavorite = () => {
    isFavorite
      ? removeFromFavorites(data.company_name)
      : addToFavorites(data.company_name);
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid black", borderRadius: 3 }}
    >
      <Col xs={4} className="d-flex">
        {isFavorite ? (
          <AiFillHeart
            size={32}
            className=" my-auto"
            onClick={toggleFavorite}
          />
        ) : (
          <BsHeart size={32} className=" my-auto" onClick={toggleFavorite} />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <Link to={{ pathname: data.url }} target="_blank">
          {data.title}
        </Link>
      </Col>
    </Row>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
