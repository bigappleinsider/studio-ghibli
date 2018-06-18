import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import { fetchDetails } from '../../actions/categoryActions';
import Card from '../card';


class Details extends Component {  
  componentDidMount() {
    const { dispatch } = this.props;
    const { category, id } = this.props.match.params;
    dispatch(fetchDetails(category, id));
  }
  render() {
    const { category } = this.props.match.params;
    const { details } = this.props;
    return (
      <div>
        <Chip
          label="Categories"
          component={Link}
          to="/"
          clickable
        />
        <Chip
          label={category}
          component={Link}
          to={`/category/${category}`}
          clickable
        />
        {!_.isEmpty(details) && 
          <Card category={category} item={details} type="details" />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { details } = state.categoryReducer;
  return {
    details
  };
}

export default withRouter(connect(mapStateToProps)(Details));