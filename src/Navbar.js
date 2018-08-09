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
  render() {
    const {classes} = this.props;

    return (
      <AppBar position="static" elevation={0} color="default">
        <Toolbar>
          <Typography className={classes.flex} type="title" color="inherit">
            <span className={classes.title}>Material-UI</span>
          </Typography>
          <Typography>
            <Tabs>
              <Tab label="&nbsp;Home&nbsp;" />
              <Tab label="&nbsp;About&nbsp;" />
              <Tab label="&nbsp;Gallery&nbsp;" />
              <Tab label="&nbsp;Contact&nbsp;" />
            </Tabs>
          </Typography>
          <div>
            <IconButton onClick={this.props.login}>
              <AccountCircle/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
