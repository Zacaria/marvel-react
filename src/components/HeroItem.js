import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardFooter } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const HeroItem = ({ id, name, imgUrl }) => {
  return (
    <Card>
      <CardImg top src={imgUrl} alt={`${name}'s picture`} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
      </CardBody>
      <CardFooter>
        <small>
          <FontAwesome name="book" /> Detail
        </small>{' '}
        |{' '}
        <small>
          <FontAwesome name="wikipedia-w" /> Wiki
        </small>{' '}
        |{' '}
        <small>
          <FontAwesome name="link" /> Comic Link
        </small>
      </CardFooter>
    </Card>
  );
};

HeroItem.propTypes = {
  id: PropTypes.number.isRequied,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
};

HeroItem.defaultProps = {
  imgUrl: 'http://via.placeholder.com/200x200',
};

export default HeroItem;
