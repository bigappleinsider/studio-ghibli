import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      gender: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.handleFilterChange(event.target.value);
  }
  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel>Filter by Gender</InputLabel>
        <Select
          value={this.state.gender}
              onChange={this.handleChange}
              inputProps={{
                name: 'gender',
                id: 'gender',
              }}
            >
              <MenuItem value="">
                <em>Filter by Gender</em>
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
      </FormControl>

    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Filter);

