import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Typography, AppBar, Toolbar, Grid} from '@material-ui/core';
import {Button, Tooltip} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import HomePage from './Home.js'
import About from './About.js';
import Contact from './Contact.js';
import Gallery from './Gallery.js';
import Login from './Login.js';
import banner from './images/Agro.jpg';
import './App.css';
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    color: 'green',
    fontSize: 30,
    flex: 1
  },
  appBar: {
    position: 'fixed'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home'
    }
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick(value, e) {
    e.preventDefault();
    this.setState({page: value});
  }
  render() {
    const {classes} = this.props;
    const currentPage = this.state.page;
    let landingPage;
    if (currentPage === 'About') {
      landingPage = <About/>
    } else if (currentPage === 'Gallery') {
      landingPage = <Gallery/>
    } else if (currentPage === 'Contact') {
      landingPage = <Contact/>
    } else if (currentPage === 'Login') {
      landingPage = <Login/>
    } else {
      landingPage = <HomePage/>
    }
    return (<React.Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} lg={12}>
          <AppBar position="static" elevation={0} color="default" className={classes.appBar}>
            <Toolbar>
              <Typography className={classes.flex} variant="title" noWrap color="inherit">
                <span className={classes.title}>Krishna Agro</span>
              </Typography>
              <Button onClick={this.handleMenuClick.bind(this, 'Home')}>Home</Button>
              <Button onClick={this.handleMenuClick.bind(this, 'About')}>About</Button>
              <Button onClick={this.handleMenuClick.bind(this, 'Gallery')}>Gallery</Button>
              <Button onClick={this.handleMenuClick.bind(this, 'Contact')}>Contact</Button>
              <Tooltip title="Login">
                <Button color="primary" onClick={this.handleMenuClick.bind(this, 'Login')}>
                  <AccountCircle/>
                </Button>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      <main>
        <img src={banner} alt="" className="App-bg"/>
        {landingPage}
      </main>
    </React.Fragment>)
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
