import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

class HeroDetails extends Component {
  render() {
    return <Container>Details Lists</Container>;
  }
}

HeroDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HeroDetails;
