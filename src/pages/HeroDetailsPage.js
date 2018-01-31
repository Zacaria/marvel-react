import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Media } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import HeroDetails from '../containers/HeroDetails';

import { fetchDetails, cleanDetails } from '../reducers/heroDuck';

class HeroDetailsPage extends Component {
  componentDidMount() {
    this.props.fetchDetailAction(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.cleanDetailsAction();
  }

  render() {
    const { hero: { thumbnail } } = this.props;

    const heroImg = thumbnail && thumbnail.path + '.' + thumbnail.extension;

    return (
      <Container>
        <Media>
          <Media left>
            {/* To replace with proper comp*/}
            <Media
              object
              className="img-responsive"
              style={{ maxWidth: 200 }}
              src={heroImg}
            />
          </Media>
          <Media body>
            <Col>
              <HeroDetails />
            </Col>
          </Media>
        </Media>
      </Container>
    );
  }
}

HeroDetailsPage.propTypes = {
  hero: PropTypes.object,
  fetchDetailAction: PropTypes.func,
  cleanDetailsAction: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  hero: state.currentHero,
});

const mapDispatchToProps = dispatch => ({
  fetchDetailAction: id => dispatch(fetchDetails(id)),
  cleanDetailsAction: () => dispatch(cleanDetails()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeroDetailsPage)
);
