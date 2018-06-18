import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '../card';

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Grid extends Component {
  render() {
    const { classes, data, category } = this.props;
    return (
      <div className={classes.cardContainer}>
      {data.map(item => {
        return (<Card key={item.id} category={category} item={item} />);
      })}
      </div>
    );
  }
}

export default withStyles(styles)(Grid);