import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import banner from './Agro.jpg';
import logo from './logo.PNG';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    const style = {
      display:''
    }
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <img src={banner} className="App-bg"/>
          {/*<div className="App-content">
            <img src={logo} className="App-logo"/>
            <p className="App-title">Krishna Agro, Miraj</p>
          </div>*/}
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
