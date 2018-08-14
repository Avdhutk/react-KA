import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import banner from './Agro.jpg';
import HomeCards from './HomeCards.js'
// import logo from './logo.PNG';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';

import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class Home extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <img src={banner} className="App-bg"/>
        <div className="App-content">
        <div className={classes.root}>
          <Grid container spacing={24} alignItems="center">
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <HomeCards className={classes.paper}/>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
            <HomeCards className={classes.paper} />
            </Grid>
          </Grid>
        </div>
        </div>

      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
