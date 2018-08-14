import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import banner from './Agro.jpg';
import Typography from '@material-ui/core/Typography';
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
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
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
          <div className={classes.heroContent}>
             <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
               Pricing
             </Typography>
             <Typography variant="title" align="center" color="textSecondary" component="p">
               Quickly build an effective pricing table for your potential customers with this layout.
               It&apos;s built with default Material-UI components with little customization.
             </Typography>
          </div>
          <div className={classes.root}>
            <Grid container spacing={40} alignItems="flex-end">
              <Grid item xs={1} md={1} sm={1} lg={1}></Grid>
              <Grid item xs={10} md={4} sm={4} lg={4}>
                <HomeCards className={classes.paper} />
              </Grid>
              <Grid item xs={1} md={2} sm={2} lg={2}></Grid>
              <Grid item xs={10} md={4} sm={4} lg={4}>
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
