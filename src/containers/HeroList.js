import React from 'react';
import PropTypes from 'prop-types';
import { CardColumns } from 'reactstrap';
import { connect } from 'react-redux';

import HeroItem from '../components/HeroItem';

const HeroList = ({ heroes }) => {
  if (!heroes) return <span>Loading...</span>;

  return (
    <CardColumns>
      {heroes.map(hero => (
        <HeroItem
          key={hero.id}
          id={hero.id}
          name={hero.name}
          imgUrl={hero.thumbnail.path + '.' + hero.thumbnail.extension}
        />
      ))}
    </CardColumns>
  );
};

HeroList.propTypes = {
  heroes: PropTypes.array,
};

const mapStateToProps = state => ({
  // OK state.heroes should be a selector
  heroes: state.heroes,
});

export default connect(mapStateToProps)(HeroList);
