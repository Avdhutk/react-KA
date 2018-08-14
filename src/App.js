import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';
import HomePage from './Home.js'
import About from './About.js';
import Contact from './Contact.js';
import Gallery from './Gallery.js';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit *3,
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
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
})

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {page:'Home'}
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick(value, e) {
    e.preventDefault()
    this.setState({page:value})
    const state = this.state.page
  }
  render() {
    const {classes} = this.props;
    const currentPage = this.state.page
    let landingPage;
    if (currentPage === 'About') {
      landingPage = <About />
    } else if(currentPage === 'Gallery'){
      landingPage = <Gallery />
    } else if(currentPage === 'Contact'){
      landingPage = <Contact />
    } else{
      landingPage = <HomePage />
    }
    return (
      <React.Fragment>
        <AppBar position="static" elevation={0} color="default" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.flex} variant="title" noWrap color="inherit">
              <span className={classes.title}>Material-UI</span>
            </Typography>
              <Button onClick={this.handleMenuClick.bind(this, 'Home')}>Home</Button>
              <Button onClick={this.handleMenuClick.bind(this, 'About')}>About</Button>
              <Button onClick={this.handleMenuClick.bind(this, 'Gallery')}>Gallery</Button>
              <Button onClick={this.handleMenuClick.bind(this, 'Contact')}>Contact</Button>
            <Tooltip title="Login">
              <Button color="primary" onClick={this.props.login} variant='outlined'>
                <AccountCircle/>
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <main>
        {landingPage }
        </main>
      </React.Fragment>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
