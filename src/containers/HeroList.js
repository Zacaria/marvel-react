import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardColumns } from 'reactstrap';
import {connect} from 'react-redux';

import HeroItem from '../components/HeroItem';

class HeroList extends Component {
  render() {
    const {heroes} = this.props;
    return (
      <CardColumns>
        {
          heroes.map(
            hero => <HeroItem id={hero.id} name={hero.name} imgUrl={hero.thumbnail.path + '.' + hero.thumbnail.extension} />
          )
        }
      </CardColumns>
    );
  }
}

HeroList.propTypes = {
  heroes: PropTypes.array,
};

const mapStateToProps = state => ({
  // OK this should be a selector
  heroes: state.heroes
});

export default connect(mapStateToProps)(HeroList);
