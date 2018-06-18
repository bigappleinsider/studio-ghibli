import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

import { fetchCategory, filterByGender } from '../../actions/categoryActions';
import Grid from '../grid';
import Filter from '../filter';

class Category extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchCategory(this.props.match.params.category));
  }
  handleFilterChange(filter){
    const { dispatch } = this.props;
    dispatch(filterByGender(filter));
  }
  render() {
    const { category } = this.props.match.params;
    const { categories } = this.props; 
    return (
      <div>
        <Chip
        label="Categories"
        component={Link}
        to="/"
        clickable
      />
        {category === 'people' && <Filter handleFilterChange={this.handleFilterChange.bind(this)} />}

        {categories && categories[category] &&
        <Grid category={category} data={categories[category]} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { categories } = state.categoryReducer;
  return {
    categories
  };
}

export default withRouter(connect(mapStateToProps)(Category));