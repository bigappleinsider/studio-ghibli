import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';

import { DISPLAY_FIELDS, generateFbShareURL, CATEGORY_MAP } from '../../constants/api';

const styles = {
  card: {
    width: 300,
    margin: 10
  }
};

class MicroCard extends Component {
  renderLinks(item) {
    const { links } = DISPLAY_FIELDS[this.props.category];
    
    const els = links.map((link, idx) => {
      if (!_.isArray(item[link]) && !_.isEmpty(item[link]) && item[link].id) {
        return (
          <Typography key={idx} component="p">
            <strong>{link}</strong>
            <Link to={`/details/${CATEGORY_MAP[link]}/${item[link].id}`}>{item[link].name||item[link].title}</Link>
          </Typography>
        );
      }
      else if(_.isArray(item[link]) && !_.isEmpty(item[link]) && item[link][0].id) {
        return (
          <div key={idx}>
             <strong>{link}</strong>
          {item[link].map((l, idx) => {
            return (
              <Typography key={idx} component="p">
             
              <Link to={`/details/${CATEGORY_MAP[link]}/${l.id}`}>{l.name||l.title}</Link>
            </Typography>
            );
          })}
          </div>
        );
      }
      else{
        return (null);
      }
      
    });
  
    return (<div>{els}</div>);
  }
  renderItem(item){
    const { fields } = DISPLAY_FIELDS[this.props.category];

    const els = fields.map((field, idx) => {
      return (
        <Typography key={idx} component="p">
          <strong>{field.label}</strong> {item[field.name]}
        </Typography>
      );
    });
    return (
      <div>
        {els}
      </div>
    );
  }
  render() {
    const { item, classes, category, type } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
          {item.name || item.title}
          </Typography>
          {this.renderItem(item)}
          {type === 'details' && this.renderLinks(item)}
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <a href={generateFbShareURL()}>
            <IconButton aria-label="Share">
                <ShareIcon />
            </IconButton>
          </a>
          {type !== 'details' &&
          <Button component={Link} to={`/details/${category}/${item.id}`} size="small" color="primary">
          Show more
          </Button>
          }
          
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(MicroCard);