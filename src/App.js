import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomePage from './HomePage.js'
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
    fontSize: 30
  }
})

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {page:'Home'}
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick(e, value) {
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
      <div>
        <AppBar position="static" elevation={0} color="default">
          <Toolbar>
            <Typography className={classes.flex} type="title" color="inherit">
              <span className={classes.title}>Material-UI</span>
            </Typography>
              <Tabs value={currentPage} onChange={this.handleMenuClick}>
                <Tab value="Home" label="&nbsp;Home&nbsp;"/>
                <Tab value="About" label="&nbsp;About&nbsp;" />
                <Tab value="Gallery" label="&nbsp;Gallery&nbsp;" />
                <Tab value="Contact" label="&nbsp;Contact&nbsp;" />
              </Tabs>
            <div>
              <IconButton onClick={this.props.login}>
                <AccountCircle/>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {landingPage}
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

class About extends React.Component {

  render() {
    return (
      <h2>Hey.. I am About </h2>
    )
  }
}
class Home extends React.Component {

  render() {
    return (
      <h2>Hey.. I am Home </h2>
    )
  }
}
class Gallery extends React.Component {

  render() {
    return (
      <h2>Hey.. I am Gallery </h2>
    )
  }
}
class Contact extends React.Component {

  render() {
    return (
      <h2>Hey.. I am Contact </h2>
    )
  }
}

export default withStyles(styles)(Navbar);
