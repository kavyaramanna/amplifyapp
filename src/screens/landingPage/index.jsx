import React, { Component } from "react";
import bg from "../../assets/images/Bg.png";
import commerce from "../../assets/images/woocommerce.svg";
import {
  Hidden,
  Grid,
  withStyles,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import styles from "./style";
import employee from "../../assets/images/employee.png";
import { push } from "connected-react-router";
import { connect } from "react-redux";
const logo =
  "https://www.pluginhive.com/wp-content/uploads/2019/09/pluginhive_logo.png";

export class Landing extends Component {
  handleNavigate = () => {
    this.props.navigateTo("/employees");
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="row">
          <Grid item xs={12} md={6} className={classes.rightGrid}>
            <img src={logo} className={classes.logo} />

            <Typography className={classes.bodyTypography}>
              Get the best WooCommerce Plugins, Shopify Apps and Magento
              Extensions to suit your business needs. Secure, Stable,
              Feature-Rich and Intuitive solutions used by over 70,000 customers
              worldwide.
            </Typography>
            <Link href="https://www.pluginhive.com/" target="_blank">
              <Typography className={classes.bodyTypographyKnowMore}>
                Know more....
              </Typography>
            </Link>
            <Button
              className={classes.buttonStyle}
              onClick={this.handleNavigate}
            >
              Get Started
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            justify="center"
            alignItems="center"
            className={classes.LoginGrid}
          >
            <Hidden smUp>
              <img className={classes.imagexsGrid} src={employee} />
            </Hidden>

            <Hidden smDown>
              <img src={bg} className={classes.leftImage} />

              <img src={commerce} className={classes.leftImage1} />
            </Hidden>
          </Grid>
        </Grid>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
}
const StyledLanding = withStyles(styles)(Landing);
export default connect(null, mapDispatchToProps)(StyledLanding);
