import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import fertilizer from './images/fertilizers1.jpg';
import nursery from './images/nursery1.jpg';
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  gridItem: {
    marginLeft: '0%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    width: '100%',
    marginTop: 0,
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  }
});

class About extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {classes} = this.props;

    return (
      <div className="App-content">
        <div className={classes.heroContent}></div>
        <div className={classes.root}>
          <Grid container spacing={40} alignItems="flex-end">
            <Grid item xs={12} md={5} className={classes.gridItem}>
              <img src={fertilizer} alt="fertilizer" height='70%' width='70%' style={{paddingLeft: 100}}/>
            </Grid>
            <Grid item xs={12} md={5}>
              <h2 style={{ textAlign:'center'}}>Fertilizers and Chemicals (Shop)</h2>
              <div className={classes.paper} style={{color:'black'}}>Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.</div>
            </Grid>
            <Grid item xs={12} md={5} className={classes.gridItem}>
              <h2 style={{ textAlign:'center'}}>Plants and Seeds (Nursery)</h2>
              <div className={classes.paper} style={{color:'black'}}>Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.</div>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={nursery} alt="nursery" height='70%' width='70%' style={{paddingLeft: 100}}/>
            </Grid>
          </Grid>
        </div>
      </div>);
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
