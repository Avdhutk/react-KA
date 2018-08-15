import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography, Card, CardActions, CardContent, CardMedia, CardHeader} from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
    marginLeft: '8.33%'
  }
});

const services = [
  {
    title: 'Krishna Agro Shop',
    description: 'We provide all kinds of agriculture medicines to increase productivity of your farm',
    image: require('./images/Shop.jpg')
  }, {
    title: 'Krishna Agro Nursery',
    description: 'We provide all kinds of agriculture medicines to increase productivity of your farm',
    image: require('./images/Nursery.jpg')
  }
]
class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {classes} = this.props;

    return (
      <div className="App-content">
        <div className={classes.heroContent}>
          <Typography variant="display1" align="center" color="secondary">
            Krishna Agro Services
          </Typography>
          <Typography variant="title" align="center" color="textSecondary" component="p">
            "Solution for all agricultural problems at one place"
          </Typography>
        </div>
        <div className={classes.root}>
          <Grid container spacing={40} alignItems="flex-end">
            {
              services.map(service => (<Grid item xs={10} md={10} sm={10} lg={5} xl={5} className={classes.gridItem} key={service.title}>
                <Card className={classes.card}>
                  <Typography variant="headline" component="h2">
                    <CardHeader title={service.title}/>
                  </Typography>
                  <CardMedia className={classes.media} image={service.image} title={service.title}/>
                  <CardContent>
                    <Typography component="p">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Know More
                    </Button>
                    <Button size="small" color="primary">
                      Contact
                    </Button>
                  </CardActions>
                </Card>
              </Grid>))
            }
          </Grid>
        </div>
      </div>);
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
