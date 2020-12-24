import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Link } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    backgroundColor: "white",
    minHeight: "10vh",
  },
  box: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    justify: "center",
    float: "left",
  },
  logo: {
    width: "45%",
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down("xs")]: {
      width: "50%",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
  },
});

const logo =
  "https://www.pluginhive.com/wp-content/uploads/2019/09/pluginhive_logo.png";
export class Bar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Box className={classes.box}>
          <Link href="https://www.pluginhive.com/" target="_blank">
            <img src={logo} className={classes.logo} />
          </Link>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(Bar);
