import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ListIcon from '@material-ui/icons/List';
import PlaceIcon from '@material-ui/icons/Place';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleIcon from '@material-ui/icons/People';

import { CATEGORIES } from '../../constants/api';


const renderIcon = (key) => {
  switch(key){
    case 'People':
      return <PeopleIcon />;
    case 'Films':
      return <MovieIcon />;
    case 'Locations':
      return <PlaceIcon />;
    case 'Species':
      return <ListIcon />;
    case 'Vehicles':
      return <DirectionsCarIcon />;
    default:
      return <ListIcon />;
  }
}

class Categories extends Component {
  render() {
    return (
      <div>
        <List component="nav">
          {CATEGORIES.map((c, idx) => {
            return(
              <ListItem component={Link} to={`/category${c.path}`} button key={idx}>
                
                <ListItemIcon>
                {renderIcon(c.label)}
                </ListItemIcon>
                <ListItemText primary={c.label} />
                
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default Categories;