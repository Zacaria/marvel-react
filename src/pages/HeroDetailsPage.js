import React, { Component } from 'react';
import { Container, Col,  Media } from 'reactstrap';

import HeroDetails from '../containers/HeroDetails';

class HeroDetailsPage extends Component {
  render() {
    return (
      <Container>
        <Media>
          <Media left href="#">
            {/* To replace with proper comp*/}
            <Media object src="http://via.placeholder.com/200x200" />
          </Media>
          <Media body>
            <Col>
              <Media heading>Details</Media>
              <HeroDetails />
            </Col>
          </Media>
        </Media>
      </Container>
    );
  }
}

export default HeroDetailsPage;
