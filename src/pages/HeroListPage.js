import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import HeroList from '../containers/HeroList';

import {fetchList} from '../reducers/heroesDuck';

class HeroListPage extends Component {
  componentDidMount() {
    this.props.fetchListAction();
  }

  render() {
    return (
      <Container>
        <HeroList />
      </Container>
    );
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  fetchListAction: () => dispatch(fetchList())
});

export default connect(null, mapDispatchToProps)(HeroListPage);
