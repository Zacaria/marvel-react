import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

import HeroList from '../containers/HeroList';

import { fetchList } from '../reducers/heroesDuck';

class HeroListPage extends Component {
  componentDidMount() {
    this.props.fetchListAction();
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>Marvelous list</h1>
        </Row>
        <Row>
          <HeroList />
        </Row>
      </Container>
    );
  }
}

HeroListPage.propTypes = {
  fetchListAction: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchListAction: () => dispatch(fetchList()),
});

export default connect(null, mapDispatchToProps)(HeroListPage);
