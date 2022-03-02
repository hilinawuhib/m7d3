import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { AiFillHeart} from "react-icons/ai";
import { connect } from "react-redux";
import { removeFromFavoriteAction } from "../redux/actions";

const mapDispatchToProps = (dispatch) => ({
  removeFromFavoriteAction: (f) => {
    dispatch(removeFromFavoriteAction(f));
  },
});

class Favourites extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {this.props.favorite.jobs.map((f) => (
                <ListGroupItem>
                  <AiFillHeart  />
                  <span>{f}</span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect((s) => s, mapDispatchToProps)(Favourites);
