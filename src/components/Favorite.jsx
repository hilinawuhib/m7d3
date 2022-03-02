import Button from "react-bootstrap/Button";

import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFavoriteAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  jobs: state.favorite.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (index) => {
    dispatch(removeFromFavoriteAction(index));
  },
});

const Favorite = ({ jobs, removeFromFavorite }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {jobs.map((job, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => removeFromFavorite(i)}>
              Remove
            </Button>

            {job.title}
          </li>
        ))}
      </ul>
    </Col>
  </Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
